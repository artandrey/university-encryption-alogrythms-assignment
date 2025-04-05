/* one-round-des.spec.ts */
import { oneRoundDES } from '../one-round-des';

describe('oneRoundDES', () => {
  it('should return the correct result', () => {
    expect(oneRoundDES('arte_and', 'password')).toBe(
      '00110010 10011011 10011000 00110010 10100111 00011000 00110111 00011010',
    );
  });
});
