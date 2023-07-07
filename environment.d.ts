declare namespace NodeJS {
  interface ProcessEnv {
    AUTH_SECRET: string;
    AUTH_HASH_ROUNDS: string;
    AUTH_COOKIE_NAME: string;
  }
}
