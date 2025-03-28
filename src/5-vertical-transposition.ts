export function verticalTransposition(text: string, key: string): string {
  // Convert text and key to uppercase
  text = text.toUpperCase().replace(/ /g, '');
  key = key.toUpperCase();

  // Get key length and create key mapping
  const keyLength = key.length;
  const keyMapping = createKeyMapping(key);

  // Create matrix
  const matrix = createMatrix(text, keyLength);

  // Read columns in order of key mapping and store each column's result
  const columns: string[] = [];
  for (const columnIndex of keyMapping) {
    columns.push(readColumn(matrix, columnIndex));
  }
  return columns.join(' ');
}

function createKeyMapping(key: string): number[] {
  // Create an array of {letter, index} pairs
  const keyWithIndices = key.split('').map((letter, index) => ({ letter, index }));

  // Sort the array based on alphabetical order of key letters
  keyWithIndices.sort((a, b) => a.letter.localeCompare(b.letter));

  // Extract just the sorted indices
  return keyWithIndices.map((item) => item.index);
}

function createMatrix(text: string, keyLength: number): string[][] {
  // Calculate number of rows needed
  const rows = Math.ceil(text.length / keyLength);

  // Create matrix
  const matrix: string[][] = [];
  for (let i = 0; i < rows; i++) {
    matrix[i] = [];
    for (let j = 0; j < keyLength; j++) {
      const index = i * keyLength + j;
      matrix[i][j] = index < text.length ? text[index] : ' ';
    }
  }

  return matrix;
}

function readColumn(matrix: string[][], columnIndex: number): string {
  let column = '';
  for (let i = 0; i < matrix.length; i++) {
    // Only add non-space characters to the result
    if (matrix[i][columnIndex] !== ' ') {
      column += matrix[i][columnIndex];
    }
  }
  return column;
}
