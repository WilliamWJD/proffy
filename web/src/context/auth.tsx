import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';
import { toast } from 'react-toastify';

interface AuthContextData {
  signed: boolean;
  user: Object | null;
  signIn(email: string, password: string): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);

  useEffect(() => {
    async function loadStorageData() {
      const storageUser = localStorage.getItem('@auth:user');
      const storageToken = localStorage.getItem('@auth:token');

      if (storageUser && storageToken) {
        setUser(JSON.parse(storageUser));
      }
    }
    loadStorageData();
  }, []);

  async function signIn(email: string, password: string) {
    try {
      const response: any = await api.post('/session', {
        email,
        password,
      });

      setUser(response.data.user);
      localStorage.setItem('@auth:user', JSON.stringify(response.data.user));
      localStorage.setItem('@auth:token', JSON.stringify(response.data.token));
    } catch (error) {
      toast.error('Erro, usuário ou senha inválidos');
    }
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
