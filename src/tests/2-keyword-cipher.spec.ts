import { keywordCipher } from '../2-keyword-cipher';

describe('Keyword Cipher', () => {
  test('should encrypt KOZHUKHOVSKY to EJYBTEBJUQEX using slogan cipher', () => {
    const input = 'KOZHUKHOVSKY';
    const keyword = 'SLOGAN_';
    const expected = 'EJYBTEBJUQEX';

    const encrypted = keywordCipher(input, keyword);
    expect(encrypted).toBe(expected);
  });

  test('should encrypt ARTEMENKO to SNPRHEJDK using keyword cipher with SECURITY', () => {
    const input = 'ARTEMENKO';
    const keyword = 'SECURITY';
    const expected = 'SMORGRHDJ';

    const encrypted = keywordCipher(input, keyword);
    expect(encrypted).toBe(expected);
  });
});
