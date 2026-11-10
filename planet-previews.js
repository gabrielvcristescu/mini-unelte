/* Render the small calculator globes once with a shared WebGL context. */
const planetPreviewCache = new Map();
let planetPreviewRenderer;

function planetPreview(key) {
  if (planetPreviewCache.has(key)) return planetPreviewCache.get(key);
  const pending = renderPlanetPreview(key).catch(() => '');
  planetPreviewCache.set(key, pending);
  return pending;
}

async function renderPlanetPreview(key) {
  const model = PLANET_MODELS[key];
  const textures = window.PLANET_SMALL_TEXTURES;
  if (!model || !textures?.[key] || !window.THREE || planetPreviewRenderer === false) return '';
  if (!planetPreviewRenderer) {
    try {
      planetPreviewRenderer = new THREE.WebGLRenderer({ antialias: true });
      planetPreviewRenderer.setSize(320, 220, false);
      planetPreviewRenderer.setClearColor(0x000000);
    } catch {
      planetPreviewRenderer = false;
      return '';
    }
  }

  const loader = new THREE.TextureLoader();
  const [surface, ringMap] = await Promise.all([
    loader.loadAsync(textures[key]),
    model.rings ? loader.loadAsync(textures.saturnRings) : null
  ]);
  surface.colorSpace = THREE.SRGBColorSpace;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(31, 320 / 220, 0.1, 20);
  camera.position.set(0, 1.05, 5.2);
  camera.lookAt(0, 0, 0);

  const ambient = new THREE.AmbientLight(0xa9bbdb, 0.42);
  const light = new THREE.DirectionalLight(0xffffff, 2.35);
  light.position.set(-3.5, 2.4, 4.5);
  scene.add(ambient, light);

  const axis = new THREE.Group();
  axis.rotation.z = THREE.MathUtils.degToRad(model.tilt);
  const radius = 1.15 * model.size;
  const globe = new THREE.Mesh(new THREE.SphereGeometry(radius, 48, 32),
    key === 'sun' ? new THREE.MeshBasicMaterial({ map: surface })
      : new THREE.MeshStandardMaterial({ map: surface, roughness: 0.92 }));
  globe.rotation.y = key === 'earth' ? -0.82 : 0;
  axis.add(globe);
  scene.add(axis);

  if (ringMap) {
    ringMap.colorSpace = THREE.SRGBColorSpace;
    const ring = new THREE.Mesh(saturnRingGeometry(radius), new THREE.MeshBasicMaterial({
      map: ringMap, side: THREE.DoubleSide, transparent: true, depthWrite: false, alphaTest: 0.02
    }));
    ring.rotation.x = Math.PI / 2;
    axis.add(ring);
  }

  try {
    planetPreviewRenderer.render(scene, camera);
    return planetPreviewRenderer.domElement.toDataURL('image/webp', 0.86);
  } finally {
    axis.traverse(object => {
      object.geometry?.dispose();
      object.material?.dispose();
    });
    surface.dispose();
    ringMap?.dispose();
  }
}

function paintPlanetPreviews(grid) {
  for (const panel of grid.querySelectorAll('[data-planet]')) {
    planetPreview(panel.dataset.planet).then(src => {
      if (!src || !panel.isConnected) return;
      const image = new Image();
      image.alt = '';
      image.src = src;
      panel.prepend(image);
    });
  }
}
