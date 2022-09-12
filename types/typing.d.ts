interface User {
  user_id: string;
  username: string;
  country: string;
  iat: number;
  exp: number;
}

export {};

declare global {
  namespace Express {
    export interface Request {
      user?: User;
    }
  }
}

declare module 'express' {
  export interface Request {
    user?: User;
  }
}
