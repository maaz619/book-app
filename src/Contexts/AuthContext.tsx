import React from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import { LoginType } from "interfaces";
import { auth } from "../firebase";

type UserType = User | null;

export type UserContextType = {
  currentUser: UserType;
  signup: ({ email, password }: LoginType) => void;
  login: ({ email, password }: LoginType) => void;
  signout: () => void;
};

const contextDefaultValue = {
  currentUser: null,
  signup: () => {},
  login: () => {},
  signout: () => {},
};
const AuthContext = React.createContext<UserContextType | undefined>(
  contextDefaultValue
);

export const useAuth = () => {
  return React.useContext(AuthContext);
};

export const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState<User | null>(null);

  const signup = async ({ email, password }: LoginType) => {
    await createUserWithEmailAndPassword(auth, email, password);
  };
  const login = async ({ email, password }: LoginType) => {
    await signInWithEmailAndPassword(auth, email, password);
  };
  const signout = async () => {
    await signOut(auth);
  };
  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const value: UserContextType = {
    currentUser,
    signup,
    login,
    signout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
