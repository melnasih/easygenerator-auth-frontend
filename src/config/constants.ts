export const COOKIE_KEYS = {
    TOKEN: "token",
    USERNAME: "username",
  } as const;
  
 
  export type CookieKey = typeof COOKIE_KEYS[keyof typeof COOKIE_KEYS];  