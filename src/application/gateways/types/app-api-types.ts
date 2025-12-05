export type CookiesApiBody = {
  key: string;
  value: string;
  path?: string;
  httpOnly?: boolean;
  secure?: boolean;
  expires?: string;
};
