export interface User {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
}

export interface AuthContextData {
  signed: boolean;
  user: User | null;
  loading: boolean;
  signIn(username: string, password: string): Promise<void>;
  signOut(): void;
}
