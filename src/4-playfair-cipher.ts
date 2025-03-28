export function playfairCipher(text: string, key: string): string {
  const rows = 6;
  const cols = 5;
  if (key.length !== rows * cols) {
    throw new Error(`Key length must be ${rows * cols} characters.`);
  }

  // Build the key matrix and a mapping from character to its position
  const matrix: string[][] = [];
  const charPos = new Map<string, { row: number; col: number }>();
  for (let i = 0; i < rows; i++) {
    const rowArr: string[] = [];
    for (let j = 0; j < cols; j++) {
      const ch = key[i * cols + j];
      rowArr.push(ch);
      charPos.set(ch, { row: i, col: j });
    }
    matrix.push(rowArr);
  }

  // Normalize the text. We'll convert to uppercase to match the key (assume key is in uppercase).
  const normalizedText = text.toUpperCase();

  // Prepare bigrams, inserting 'X' as filler if needed
  const filler = 'X';
  const pairs: string[] = [];
  let i = 0;
  while (i < normalizedText.length) {
    const a = normalizedText[i];
    let b = '';
    if (i + 1 < normalizedText.length) {
      b = normalizedText[i + 1];
      if (a === b) {
        // if both letters are the same, insert filler after first letter
        b = filler;
        pairs.push(a + b);
        i += 1; // only advance by one
      } else {
        pairs.push(a + b);
        i += 2;
      }
    } else {
      // Last character, add filler
      b = filler;
      pairs.push(a + b);
      i++;
    }
  }

  // Encrypt each pair using the Playfair rules
  let cipherText = '';
  for (const pair of pairs) {
    const [charA, charB] = pair.split('');
    const posA = charPos.get(charA);
    const posB = charPos.get(charB);

    if (!posA || !posB) {
      throw new Error(`Character not found in key matrix: ${!posA ? charA : charB}`);
    }
    let encA = '';
    let encB = '';

    if (posA.row === posB.row) {
      // Same row: shift right
      encA = matrix[posA.row][(posA.col + 1) % cols];
      encB = matrix[posB.row][(posB.col + 1) % cols];
    } else if (posA.col === posB.col) {
      // Same column: shift down
      encA = matrix[(posA.row + 1) % rows][posA.col];
      encB = matrix[(posB.row + 1) % rows][posB.col];
    } else {
      // Rectangle: swap columns
      encA = matrix[posA.row][posB.col];
      encB = matrix[posB.row][posA.col];
    }

    // Instead of concatenating directly, push to an array
    cipherText += ' ' + encA + encB;
  }

  // Remove leading space
  return cipherText.trim();
}
