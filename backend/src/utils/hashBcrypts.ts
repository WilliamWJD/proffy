import bcrypt from 'bcryptjs';

export async function hashGenerator(password: string) {
  let hash;
  hash = await bcrypt.hash(password, 8);
  return hash;
}

export function checkPassword(password: string, password_hash: string) {
  return bcrypt.compare(password, password_hash);
}
