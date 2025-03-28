import { verticalTransposition } from '../5-vertical-transposition';

describe('Vertical Transposition Cipher', () => {
  test('should encrypt KOZHUKHOVSKY YAROSLAV ALEKSANDROVICH to HKLSI KYVNH KORLR OVOEO ZSSKV HAAD UYAAC using vertical transposition cipher with FOREVER key', () => {
    const input = 'KOZHUKHOVSKY YAROSLAV ALEKSANDROVICH';
    const key = 'FOREVER';
    const expected = 'HKLSI KYVNH KORLR OVOEO ZSSKV HAAD UYAAC';

    const encrypted = verticalTransposition(input, key);
    expect(encrypted).toBe(expected);
  });

  test('should encrypt ARTEMENKOANDRIYOLEKSADROVYCH to TALO AKYD ROOR ERSC ENEV NIAH MDKY using vertical transposition cipher with ENCRYPT key', () => {
    const input = 'ARTEMENKOANDRIYOLEKSADROVYCH';
    const key = 'ENCRYPT';
    const expected = 'TALO AKYD ROOR ERSC ENEV NIAH MDKY';

    const encrypted = verticalTransposition(input, key);
    expect(encrypted).toBe(expected);
  });
});
