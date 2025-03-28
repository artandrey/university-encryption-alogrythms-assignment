import { playfairCipher } from '../4-playfair-cipher';

describe('Playfair Cipher', () => {
  test('should encrypt KOZHUKHOVSKY to R_ CN P, RZ XM ,J using Playfair cipher with custom matrix key', () => {
    const input = 'KOZHUKHOVSKY';
    const key = 'KWRH,PTBNU_DOZEJF.CYVGAIXM-QLS';
    const expected = 'R_ CN P, RZ XM ,J';

    const encrypted = playfairCipher(input, key);
    expect(encrypted).toBe(expected);
  });

  test('should encrypt ARTEMENKO to CYBADFQMTV using Playfair cipher with matrix key from report', () => {
    const input = 'ARTEMENKO';
    const key = 'DOZEUIXM-QLJKWRH,PTBNS_F.CYVGA';
    const expected = 'UB F- -Z _L XJ';

    const encrypted = playfairCipher(input, key);
    expect(encrypted).toBe(expected);
  });
});
