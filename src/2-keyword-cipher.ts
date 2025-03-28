export function keywordCipher(text: string, keyword: string): string {
  // Convert text and keyword to uppercase
  text = text.toUpperCase();
  keyword = keyword.toUpperCase();

  // Create alphabet array (A-Z + space)
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ '.split('');

  // Create substitution key
  // First add keyword letters (removing duplicates)
  const substitutionKey: string[] = [];
  for (const char of keyword) {
    if (!substitutionKey.includes(char)) {
      substitutionKey.push(char);
    }
  }

  // Then add remaining alphabet letters in order
  for (const char of alphabet) {
    if (!substitutionKey.includes(char)) {
      substitutionKey.push(char);
    }
  }

  // Create mapping from original alphabet to substitution key
  const mapping = new Map<string, string>();
  for (let i = 0; i < alphabet.length; i++) {
    mapping.set(alphabet[i], substitutionKey[i]);
  }

  // Encrypt the text
  let result = '';
  for (const char of text) {
    result += mapping.get(char) || char;
  }

  return result;
}
