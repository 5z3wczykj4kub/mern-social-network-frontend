function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function getRandomDelayInMilliseconds(min = 100, max = 5000) {
  return getRandomIntInclusive(min, max);
}

export default getRandomDelayInMilliseconds;
