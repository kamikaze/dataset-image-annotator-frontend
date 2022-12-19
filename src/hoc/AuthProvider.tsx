import {createContext, useState} from "react";

type AuthContextType = {
  user: string|null;
  signin: (newUser: string, cb: CallableFunction) => void;
  signout: (cb: CallableFunction) => void;
}
export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

interface Props {
  children: JSX.Element
}

export const AuthProvider = ({children}: Props) => {
  const [user, setUser] = useState<string|null>(null);
  const signin = (newUser: string, cb: CallableFunction) => {
    setUser(newUser);
    cb();
  };
  const signout = (cb: CallableFunction) => {
    setUser(null);
    cb();
  };
  const value = {user, signin, signout};

  return <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>
}
