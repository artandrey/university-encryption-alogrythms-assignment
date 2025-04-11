import { processRSA } from '../rsa';

describe('RSA Encryption and Decryption', () => {
  it('should correctly encrypt and decrypt the message "arte"', () => {
    const p = 23n;
    const q = 53n;
    const e = 17n;
    const message = 'arte';

    const expectedN = 1219n;
    const expectedD = 673n;
    const expectedEncryptedBlocks = [360n, 1034n, 990n, 624n];
    const expectedDecryptedMessage = 'arte';

    const result = processRSA(message, p, q, e);

    console.log(`Відкритий ключ: (e=${result.publicKey.e}, n=${result.publicKey.n})`);
    console.log(`Закритий ключ: (d=${result.privateKey.d}, n=${result.privateKey.n})`);
    console.log(`Шифровані блоки: [${result.encryptedBlocks.join(', ')}]`);
    console.log(`Дешифроване повідомлення: ${result.decryptedMessage}`);

    expect(result.publicKey.n).toBe(expectedN);
    expect(result.publicKey.e).toBe(e);
    expect(result.privateKey.n).toBe(expectedN);
    expect(result.privateKey.d).toBe(expectedD);
    expect(result.encryptedBlocks).toEqual(expectedEncryptedBlocks);
    expect(result.decryptedMessage).toBe(expectedDecryptedMessage);
  });

  it('should correctly encrypt and decrypt the message "arte" with p=47, q=89, e=5', () => {
    const p = 47n;
    const q = 89n;
    const e = 5n;
    const message = 'arte';

    const expectedN = 4183n;
    const expectedD = 2429n;
    const expectedEncryptedBlocks = [995n, 1791n, 505n, 3459n];
    const expectedDecryptedMessage = 'arte';

    const result = processRSA(message, p, q, e);

    console.log(`Test Case 2: Відкритий ключ: (e=${result.publicKey.e}, n=${result.publicKey.n})`);
    console.log(`Test Case 2: Закритий ключ: (d=${result.privateKey.d}, n=${result.privateKey.n})`);
    console.log(`Test Case 2: Шифровані блоки: [${result.encryptedBlocks.join(', ')}]`);
    console.log(`Test Case 2: Дешифроване повідомлення: ${result.decryptedMessage}`);

    expect(result.publicKey.n).toBe(expectedN);
    expect(result.publicKey.e).toBe(e);
    expect(result.privateKey.n).toBe(expectedN);
    expect(result.privateKey.d).toBe(expectedD);
    expect(result.encryptedBlocks).toEqual(expectedEncryptedBlocks);
    expect(result.decryptedMessage).toBe(expectedDecryptedMessage);
  });
});
