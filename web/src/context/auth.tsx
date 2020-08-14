import React, { createContext, useState } from 'react';
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

  async function signIn(email: string, password: string) {
    try {
      const response: any = await api.post('/session', {
        email,
        password,
      });

      setUser(response.data.user);
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
