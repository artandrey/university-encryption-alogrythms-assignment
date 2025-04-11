import { processRSA } from '../rsa';

describe('RSA Encryption and Decryption', () => {
  it('should correctly encrypt and decrypt the message "meln"', () => {
    const p = 23n;
    const q = 59n;
    const e = 53n;
    const message = 'meln';

    const expectedN = 1357n;
    const expectedD = 313n;
    const expectedEncryptedBlocks = [950n, 1129n, 307n, 1162n];
    const expectedDecryptedMessage = 'meln';

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

  it('should correctly encrypt and decrypt the message "meln" with p=47, q=89, e=5', () => {
    const p = 47n;
    const q = 89n;
    const e = 5n;
    const message = 'meln';

    const expectedN = 4183n;
    const expectedD = 2429n;
    const expectedEncryptedBlocks = [2675n, 3459n, 3857n, 2027n];
    const expectedDecryptedMessage = 'meln';

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
