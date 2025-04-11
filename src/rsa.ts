// Helper function for modular exponentiation (base^exponent % modulus)
function modPow(base: bigint, exponent: bigint, modulus: bigint): bigint {
  if (modulus === 1n) return 0n;
  let result = 1n;
  base = base % modulus;
  while (exponent > 0n) {
    if (exponent % 2n === 1n) result = (result * base) % modulus;
    exponent = exponent >> 1n; // equivalent to exponent = floor(exponent / 2)
    base = (base * base) % modulus;
  }
  return result;
}

function egcd(a: bigint, b: bigint): { gcd: bigint; x: bigint; y: bigint } {
  if (a === 0n) {
    return { gcd: b, x: 0n, y: 1n };
  }
  const { gcd, x: x1, y: y1 } = egcd(b % a, a);
  const x = y1 - (b / a) * x1;
  const y = x1;
  return { gcd, x, y };
}

function modInverse(a: bigint, m: bigint): bigint {
  const { gcd, x } = egcd(a, m);
  if (gcd !== 1n) {
    throw new Error('Modular inverse does not exist (a and m are not coprime)');
  }
  // Ensure the result is positive
  return ((x % m) + m) % m;
}

export function encryptRSA(m: bigint, e: bigint, n: bigint): bigint {
  return modPow(m, e, n);
}

export function decryptRSA(c: bigint, d: bigint, n: bigint): bigint {
  return modPow(c, d, n);
}

export function processRSA(
  message: string,
  p: bigint,
  q: bigint,
  e: bigint,
): {
  publicKey: { e: bigint; n: bigint };
  privateKey: { d: bigint; n: bigint };
  asciiValues: bigint[];
  encryptedBlocks: bigint[];
  decryptedBlocks: bigint[];
  decryptedMessage: string;
} {
  const n = p * q;
  const phi_n = (p - 1n) * (q - 1n);
  const d = modInverse(e, phi_n);

  const asciiValues = message.split('').map((char) => BigInt(char.charCodeAt(0)));

  const encryptedBlocks = asciiValues.map((m) => encryptRSA(m, e, n));

  const decryptedBlocks = encryptedBlocks.map((c) => decryptRSA(c, d, n));

  const decryptedMessage = decryptedBlocks.map((m) => String.fromCharCode(Number(m))).join('');

  return {
    publicKey: { e, n },
    privateKey: { d, n },
    asciiValues,
    encryptedBlocks,
    decryptedBlocks,
    decryptedMessage,
  };
}
