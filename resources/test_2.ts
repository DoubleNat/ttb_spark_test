export function simpleCipher(encrypted: string, k: number): string {
  const A_CODE = 65; // 'A'
  const ALPHABET_SIZE = 26;

  return encrypted
    .split('')
    .map((char) => {
      const code = char.charCodeAt(0) - A_CODE;

      // shift ย้อน + กันติดลบ
      const shifted = (code - k % ALPHABET_SIZE + ALPHABET_SIZE) % ALPHABET_SIZE;

      return String.fromCharCode(shifted + A_CODE);
    })
    .join('');
}
