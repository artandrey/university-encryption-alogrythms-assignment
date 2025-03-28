export function vigenereCipher(text: string, key: string): string {
  // Convert text and key to uppercase
  text = text.toUpperCase();
  key = key.toUpperCase();

  // Create alphabet array (A-Z + space)
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ '.split('');
  const alphabetLength = alphabet.length;

  // NOTE: This implementation uses a 27-character alphabet (A-Z + space)
  // For the report example, "ARTEMENKO" with key "CYPHER" gives "COHLQVPHC"

  // Create mapping from letter to number and vice versa
  const letterToNumber = new Map<string, number>();
  const numberToLetter = new Map<number, string>();
  for (let i = 0; i < alphabetLength; i++) {
    letterToNumber.set(alphabet[i], i);
    numberToLetter.set(i, alphabet[i]);
  }

  // Repeat key to match text length
  let repeatedKey = '';
  for (let i = 0; i < text.length; i++) {
    repeatedKey += key[i % key.length];
  }

  // Encrypt the text
  let result = '';
  for (let i = 0; i < text.length; i++) {
    const textNum = letterToNumber.get(text[i]) || 0;
    const keyNum = letterToNumber.get(repeatedKey[i]) || 0;

    // Vigenère encryption formula: (text + key) mod n
    const encryptedNum = (textNum + keyNum) % alphabetLength;
    result += numberToLetter.get(encryptedNum) || text[i];
  }

  return result;
}
