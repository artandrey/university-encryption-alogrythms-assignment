import { SubstitutionKey, singleLetterSubstitution } from '../1-single-letter-substitution';

describe('Single Letter Substitution Cipher', () => {
  test('should encrypt KOZHUKHOVSKY to DJLNADNJIVDQ', () => {
    // Create the specific key from the report example
    const key: SubstitutionKey = {
      A: 'K',
      B: 'W',
      C: 'R',
      D: 'H',
      E: 'P',
      F: 'T',
      G: 'B',
      H: 'N',
      I: 'U',
      J: '_',
      K: 'D',
      L: 'O',
      M: 'Z',
      N: 'E',
      O: 'J',
      P: 'F',
      Q: 'C',
      R: 'Y',
      S: 'V',
      T: 'G',
      U: 'A',
      V: 'I',
      W: 'X',
      X: 'M',
      Y: 'Q',
      Z: 'L',
      ' ': 'S',
    };

    const input = 'KOZHUKHOVSKY';
    const expected = 'DJLNADNJIVDQ';

    const encrypted = singleLetterSubstitution(input, key);
    expect(encrypted).toBe(expected);
  });

  test('should encrypt ARTEMENKO to XUSRGRFVP using substitution cipher with report key', () => {
    const key: SubstitutionKey = {
      A: 'X',
      B: 'M',
      C: 'Q',
      D: 'Z',
      E: 'R',
      F: 'T',
      G: '_',
      H: 'L',
      I: 'K',
      J: 'J',
      K: 'V',
      L: 'B',
      M: 'G',
      N: 'F',
      O: 'P',
      P: 'O',
      Q: 'I',
      R: 'U',
      S: 'H',
      T: 'S',
      U: 'E',
      V: 'D',
      W: 'C',
      X: 'A',
      Y: 'N',
      Z: 'W',
      ' ': 'Y',
    };

    const input = 'ARTEMENKO';
    const expected = 'XUSRGRFVP';

    const encrypted = singleLetterSubstitution(input, key);
    expect(encrypted).toBe(expected);
  });
});
