const PLANETS = [
  {
    name: 'Mercur',
    textureKey: 'mercury',
    hours: 1407.6,
    tilt: 0.034,
    size: 0.501
  },
  {
    name: 'Venus',
    textureKey: 'venus',
    hours: 5832.5,
    tilt: 177.36,
    size: 0.604
  },
  {
    name: 'Pământ',
    textureKey: 'earth',
    hours: 23.9345,
    tilt: 23.44,
    size: 0.611,
    earth: true
  },
  {
    name: 'Marte',
    textureKey: 'mars',
    hours: 24.6229,
    tilt: 25.19,
    size: 0.536
  },
  {
    name: 'Jupiter',
    textureKey: 'jupiter',
    hours: 9.925,
    tilt: 3.13,
    size: 1.000
  },
  {
    name: 'Saturn',
    textureKey: 'saturn',
    hours: 10.656,
    tilt: 26.73,
    size: 0.963,
    rings: true
  },
  {
    name: 'Uranus',
    textureKey: 'uranus',
    hours: 17.24,
    tilt: 97.77,
    size: 0.811
  },
  {
    name: 'Neptun',
    textureKey: 'neptune',
    hours: 16.11,
    tilt: 28.32,
    size: 0.807
  }
];

const PLANET_MODELS = Object.fromEntries(PLANETS.map(planet => [planet.textureKey, planet]));
Object.assign(PLANET_MODELS, {
  moon: { size: 0.38, tilt: 6.68 },
  pluto: { size: 0.33, tilt: 122.53 },
  sun: { size: 1.03, tilt: 7.25 }
});

function saturnRingGeometry(radius) {
  const inner = radius * 1.19;
  const outer = radius * 2.27;
  const geometry = new THREE.RingGeometry(inner, outer, 128, 16);
  const positions = geometry.attributes.position;
  const uv = geometry.attributes.uv;
  for (let i = 0; i < positions.count; i++) {
    const distance = Math.hypot(positions.getX(i), positions.getY(i));
    uv.setXY(i, (distance - inner) / (outer - inner), 0.5);
  }
  return geometry;
}
