// Types for the substitution cipher
type SubstitutionKey = {
  [key: string]: string;
};

// Create a random substitution key for the Latin alphabet
const createSubstitutionKey = (): SubstitutionKey => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ';
  const shuffledAlphabet = alphabet
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('');

  const key: SubstitutionKey = {};
  for (let i = 0; i < alphabet.length; i++) {
    key[alphabet[i]] = shuffledAlphabet[i];
  }
  return key;
};

// Function to encrypt text using single-letter substitution
const singleLetterSubstitution = (text: string, key: SubstitutionKey): string => {
  return text
    .split('')
    .map((char) => key[char] || char)
    .join('');
};

// Function to decrypt text using single-letter substitution
const singleLetterSubstitutionDecrypt = (text: string, key: SubstitutionKey): string => {
  const reverseKey: SubstitutionKey = {};
  for (const [k, v] of Object.entries(key)) {
    reverseKey[v] = k;
  }
  return text
    .split('')
    .map((char) => reverseKey[char] || char)
    .join('');
};

export { singleLetterSubstitution, singleLetterSubstitutionDecrypt, createSubstitutionKey, SubstitutionKey };
