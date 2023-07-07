const config = {
  authSecret: process.env.AUTH_SECRET,
  authHashRounds: parseInt(process.env.AUTH_HASH_ROUNDS, 10),
  authCookieName: process.env.AUTH_COOKIE_NAME,
};

export default config;
