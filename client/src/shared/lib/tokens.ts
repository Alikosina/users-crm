export interface Tokens {
  access_token?: string;
  refresh_token?: string;
}

const LS_TOKENS_KEY = "tokens";

export const getTokens = (): Tokens => {
  const data = localStorage.getItem(LS_TOKENS_KEY);

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

export const setTokens = (data: Tokens) => {
  const tokensStr = JSON.stringify(data);

  localStorage.setItem(LS_TOKENS_KEY, tokensStr);
};
