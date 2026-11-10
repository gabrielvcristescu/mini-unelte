/* SVG path for a lunar disc with its illuminated side in the standard diagram orientation. */
function lunarLightPath(x, y, radius, fraction, waxing) {
  const lit = Math.max(0, Math.min(1, fraction));
  if (lit <= 0.00001) return '';
  const cosine = 1 - 2 * lit;
  const rx = radius * Math.abs(cosine);
  const top = y - radius;
  const bottom = y + radius;
  const limb = `M ${x} ${top} A ${radius} ${radius} 0 0 ${waxing ? 1 : 0} ${x} ${bottom}`;
  const sweep = waxing === (cosine < 0) ? 1 : 0;
  const terminator = rx < 0.001 ? `L ${x} ${top}` : `A ${rx} ${radius} 0 0 ${sweep} ${x} ${top}`;
  return `${limb} ${terminator} Z`;
}
