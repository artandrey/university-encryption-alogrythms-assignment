import { vigenereCipher } from '../3-vigenere-cipher';

describe('Vigenere Cipher', () => {
  test('should encrypt KOZHUKHOVSKY to LWRJHSUPCKML using Vigenere cipher with BITCOIN key', () => {
    const input = 'KOZHUKHOVSKY';
    const key = 'BITCOIN';
    const expected = 'LWRJHSUPCKML';

    const encrypted = vigenereCipher(input, key);
    expect(encrypted).toBe(expected);
  });

  test('should encrypt ARTEMENKO to COHLQVPHC using Vigenere cipher with CYPHER key', () => {
    const input = 'ARTEMENKO';
    const key = 'CYPHER';
    const expected = 'COHLQVPHC';

    const encrypted = vigenereCipher(input, key);
    expect(encrypted).toBe(expected);
  });
});
