import bcrypt from "bcrypt";
import config from "@/utils/config";

export function hashPassword(password: string) {
  return bcrypt.hash(password, config.authHashRounds);
}

export function comparePasswords(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}
