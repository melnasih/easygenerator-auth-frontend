export interface User {
  id: string;
  email: string;
  name: string;
}

export interface AuthResponse {
  message: string;
  token: string;
  user: User;
  expiresIn: string;
}

export interface SignupData {
  email: string;
  name: string;
  password: string;
}

export interface SigninData {
  email: string;
  password: string;
}


export interface UserDataPayload {
  token: string | null;
  user: string | null;
}
