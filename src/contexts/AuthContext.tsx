import { createContext, useContext, useState, ReactNode } from "react";
import { useNavigation } from "@react-navigation/native";

//User typing
type User = {
  email: string;
  password: String;
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
    if (email !== "" && password !== "") {
      setUser({
        email: email,
        password: password,
      });

      navigation.navigate("AuthStack", { screen: "Welcome" });
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
