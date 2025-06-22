import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { auth } from "../services/firabaseConnection";

// User typing
type User = {
  uid: string;
  email: string;
};

// Context typing
type AuthContextType = {
  user: User | null;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  loading: boolean;
  isRegistering: boolean;
  setIsRegistering: React.Dispatch<React.SetStateAction<boolean>>;
};

// Create the context
export const AuthContext = createContext({} as AuthContextType);

// Provider
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isRegistering, setIsRegistering] = useState(false);

  useEffect(() => {
    const loadStoredUser = async () => {
      const userJson = await AsyncStorage.getItem("userData");
      if (userJson) {
        const userStored: User = JSON.parse(userJson);
        setUser(userStored);
      }
      setLoading(false);
    };

    loadStoredUser();

    const unsubscribe = onAuthStateChanged(auth, async (userData) => {
      if (userData && !isRegistering) {
        const formattedUser = {
          uid: userData.uid,
          email: userData.email ?? "",
        };

        setUser(formattedUser);
        await AsyncStorage.setItem("userData", JSON.stringify(formattedUser));
      } else if (!userData) {
        setUser(null);
        await AsyncStorage.removeItem("userData");
      }
    });

    return unsubscribe;
  }, [isRegistering]);

  const signIn = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userData = userCredential.user;

      const formattedUser = {
        uid: userData.uid,
        email: userData.email ?? "",
      };

      setUser(formattedUser);
      await AsyncStorage.setItem("userData", JSON.stringify(formattedUser));
    } catch (error: any) {
      throw error;
    }
  };

  const signOut = async () => {
    await firebaseSignOut(auth);
    await AsyncStorage.removeItem("userData");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
        loading,
        isRegistering,
        setIsRegistering,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
