import { createContext, useContext, useEffect, useState } from 'react';
import { AuthContextData, User } from '../models/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as auth from '../services/auth';

const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({ children }: { children: any }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    loadUserStoregedData();
  }, []);

  async function loadUserStoregedData() {
    try {
      const userData = await AsyncStorage.getItem('userData');

      if (userData) {
        setUser(JSON.parse(userData));
      }
      setLoading(false);
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async function signIn(username: string, password: string) {
    try {
      const response = await auth.userLogIn(username, password);
      if (response) {
        setUser(response.data);
        AsyncStorage.setItem('userData', JSON.stringify(response.data));
      }
    } catch (error) {
      throw new Error(error as string);
    }
  }

  function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user: user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
