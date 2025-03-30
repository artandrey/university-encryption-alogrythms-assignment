import { verticalTransposition } from '../5-vertical-transposition';

describe('Vertical Transposition Cipher', () => {
  test('should encrypt KOZHUKHOVSKY YAROSLAV ALEKSANDROVICH to HKLSI KYVNH KORLR OVOEO ZSSKV HAAD UYAAC using vertical transposition cipher with FOREVER key', () => {
    const input = 'KOZHUKHOVSKY YAROSLAV ALEKSANDROVICH';
    const key = 'FOREVER';
    const expected = 'HKLSI KYVNH KORLR OVOEO ZSSKV HAAD UYAAC';

    const encrypted = verticalTransposition(input, key);
    expect(encrypted).toBe(expected);
  });

  test('should encrypt ARTEMENKO ANDRIY OLEKSANDROVYCH to TALR AKYNH ROOD ERSY ENEO NIAC MDKV using vertical transposition cipher with ENCRYPT key', () => {
    const input = 'ARTEMENKO ANDRIY OLEKSANDROVYCH';
    const key = 'ENCRYPT';
    const expected = 'TALR AKYNH ROOD ERSY ENEO NIAC MDKV';

    const encrypted = verticalTransposition(input, key);
    expect(encrypted).toBe(expected);
  });
});
