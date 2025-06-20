import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { useNavigation } from "@react-navigation/native";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firabaseConnection";

//User typing
type User = {
  uid: string;
  email: string;
};

//Context typing
type AuthContextType = {
  user: User | null;
  signIn: (email: string, password: string) => Promise<void>;
  loading: boolean;
};

//Create the context

export const AuthContext = createContext({} as AuthContextType);

//Provider

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userData) => {
      if (userData) {
        setUser({
          uid: userData.uid,
          email: userData.email ?? "",
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

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
    } catch (error: any) {
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
