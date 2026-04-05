export function simpleCipher(encrypted: string, k: number): string {
  const A_CODE = 65;
  const ALPHABET_SIZE = 26;

  return encrypted
    .split('')
    .map((char) => {
      // ✅ ถ้าเป็น space → ไม่ต้องทำอะไร
      if (char === ' ') return char;

      const code = char.charCodeAt(0) - A_CODE;
      const shifted = (code - (k % ALPHABET_SIZE) + ALPHABET_SIZE) % ALPHABET_SIZE;

      return String.fromCharCode(shifted + A_CODE);
    })
    .join('');
}
