const settings = document.getElementById('settings');
const chart = document.getElementById('analemma-chart');
const day = document.getElementById('day');
const readout = document.getElementById('solar-readout');
const dateFormat = new Intl.DateTimeFormat('ro-RO', { dateStyle: 'long', timeZone: 'UTC' });
const degrees = new Intl.NumberFormat('ro-RO', { maximumFractionDigits: 2 });
const DAY_MS = 86400000;
const bounds = { left: 66, right: 611, top: 24, bottom: 403 };
let points = [];

function axis(values, lower, upper) {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const interval = Math.max((max - min) / 5, 0.2);
  const power = 10 ** Math.floor(Math.log10(interval));
  const step = [1, 2, 5, 10].find(candidate => candidate * power >= interval) * power;
  const low = Math.floor(min / step - 0.15) * step;
  const high = Math.ceil(max / step + 0.15) * step;
  const ticks = Array.from({ length: Math.round((high - low) / step) + 1 }, (_, index) => low + index * step);
  return { ticks, map: value => lower + (value - low) / (high - low) * (upper - lower) };
}

function wrapAzimuth(value) {
  return (value % 360 + 360) % 360;
}

function updateAnalemma() {
  if (!settings.checkValidity()) return;
  const fields = settings.elements;
  const year = fields.year.valueAsNumber;
  const [hours, minutes] = fields.time.value.split(':').map(Number);
  const offsetMinutes = hours * 60 + minutes - fields.offset.valueAsNumber * 60;
  const start = Date.UTC(year, 0, 1);
  const length = (Date.UTC(year + 1, 0, 1) - start) / DAY_MS;
  let previousAzimuth;
  points = Array.from({ length }, (_, index) => {
    const date = new Date(start + index * DAY_MS);
    const instant = new Date(date.getTime() + offsetMinutes * 60000);
    const { azimuth, altitude } = SunCalc.getPosition(instant, fields.latitude.valueAsNumber, fields.longitude.valueAsNumber);
    // Keep the curve continuous if it crosses the northern meridian.
    const horizontal = previousAzimuth === undefined ? azimuth
      : azimuth + 360 * Math.round((previousAzimuth - azimuth) / 360);
    previousAzimuth = horizontal;
    return { date, azimuth, altitude, horizontal };
  });

  const x = axis(points.map(point => point.horizontal), bounds.left, bounds.right);
  const y = axis(points.map(point => point.altitude), bounds.bottom, bounds.top);
  for (const point of points) {
    point.x = x.map(point.horizontal);
    point.y = y.map(point.altitude);
  }
  const vertical = x.ticks.map(t => `<path class="chart-grid" d="M${x.map(t)},${bounds.top}V${bounds.bottom}"/><text text-anchor="middle" x="${x.map(t)}" y="424">${degrees.format(wrapAzimuth(t))}°</text>`);
  const horizontal = y.ticks.map(t => `<path class="chart-grid" d="M${bounds.left},${y.map(t)}H${bounds.right}"/><text text-anchor="end" x="60" y="${y.map(t) + 5}">${degrees.format(t)}°</text>`);
  const dots = points.filter(point => point.date.getUTCDate() === 1)
    .map(point => `<circle class="month-dot" cx="${point.x}" cy="${point.y}" r="3.4"><title>${dateFormat.format(point.date)}</title></circle>`);
  chart.innerHTML = `${vertical.join('')}${horizontal.join('')}
    <polyline class="chart-line" points="${points.map(point => `${point.x},${point.y}`).join(' ')}"/>
    ${dots.join('')}<circle class="selected-dot" id="selected-day" r="7"/>
    <text text-anchor="middle" x="340" y="448">Azimut</text>
    <text transform="translate(17 213) rotate(-90)" text-anchor="middle">Înălțime</text>`;
  day.max = String(length - 1);
  updateDay();
}

function updateDay() {
  const point = points[Number(day.value)];
  const marker = document.getElementById('selected-day');
  marker.setAttribute('cx', point.x);
  marker.setAttribute('cy', point.y);
  const date = dateFormat.format(point.date);
  day.setAttribute('aria-valuetext', date);
  readout.textContent = `${date} · Azimut ${degrees.format(point.azimuth)}° · Înălțime ${degrees.format(point.altitude)}°`;
}

settings.elements.year.value = new Date().getFullYear();
settings.addEventListener('submit', event => event.preventDefault());
settings.addEventListener('input', updateAnalemma);
day.addEventListener('input', updateDay);
updateAnalemma();
