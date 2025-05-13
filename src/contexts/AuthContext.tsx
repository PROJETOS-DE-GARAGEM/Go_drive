import { createContext, useContext, useState, ReactNode } from "react";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firabaseConnection";

//User typing
type User = {
  uid: string;
  email: string;
};

//Context typing
type AuthContextType = {
  user: User | null;
  //   IsAuthticated: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  //   logout: () => Promise<void>;
};

//Create the context

export const AuthContext = createContext({} as AuthContextType);

//Provider

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const navigation = useNavigation();

  //Login Simulation

  const signIn = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userData = userCredential.user;

      setUser({
        uid: userData.uid,
        email: userData.email ?? "",
      });
      navigation.reset({
        index: 0,
        routes: [{ name: "AppStack", params: { screen: "Home" } }],
      });
    } catch (error: any) {
      console.error("Erro ao fazer login:", error.message);
      throw new Error("Email ou senha inválidos.");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
