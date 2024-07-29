export function genRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function genRandomNumber(min, max, decimals) {
  const factor = Math.pow(10, decimals);
  return Math.round((Math.random() * (max - min) + min) * factor) / factor;
}
export function getNumber(value) {
  return Math.round(value*100)/100
}