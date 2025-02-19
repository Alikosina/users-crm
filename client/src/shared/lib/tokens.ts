interface Tokens {
  access_token?: string;
  refresh_token?: string;
}

export const getTokens = (): Tokens => {
  const data = localStorage.getItem("tokens");

  return data ? JSON.parse(data) : {};
};

export const getAccessToken = () => {
  const tokens = getTokens();

  return tokens.access_token;
};

export const getRefreshToken = () => {
  const tokens = getTokens();

  return tokens.refresh_token;
};
