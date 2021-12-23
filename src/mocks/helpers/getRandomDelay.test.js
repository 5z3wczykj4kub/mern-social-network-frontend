import getRandomDelayInMilliseconds from './getRandomDelay';

describe('getRandomDelayInMilliseconds function', () => {
  it('should return a random integer between 100 and 5000', () => {
    for (let i = 0; i < 10; i++) {
      const delay = getRandomDelayInMilliseconds();
      expect(delay).toBeGreaterThanOrEqual(100);
      expect(delay).toBeLessThanOrEqual(5000);
    }
  });

  it('should return a random integer between 0 and 2000', () => {
    for (let i = 0; i < 10; i++) {
      const delay = getRandomDelayInMilliseconds(0, 2000);
      expect(delay).toBeGreaterThanOrEqual(0);
      expect(delay).toBeLessThanOrEqual(2000);
    }
  });
});
