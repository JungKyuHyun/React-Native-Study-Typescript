import React, {createContext, useContext, useState} from 'react';

interface User {
  id: number;
  username: string;
}

interface AuthContextValue {
  user: User | null;
  setUser(user: User): void;
}

export const AuthContext = createContext<AuthContextValue | null>(null);

interface Props {
  children: React.ReactNode;
}

export function AuthContextProvider({children}: Props) {
  const [user, setUser] = useState<User | null>(null);

  <AuthContext.Provider value={{user, setUser}}>
    {children}
  </AuthContext.Provider>;
}

export function useAuth() {
  const auth = useContext(AuthContext);

  if (auth === null) {
    throw new Error('AuthContextProvider is not used');
  }

  return auth;
}
