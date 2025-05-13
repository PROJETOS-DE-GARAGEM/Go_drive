import { useContext } from "react";
import { View, ActivityIndicator } from "react-native";
import { AuthContext } from "../contexts/AuthContext";
import AppStack from "./AppStack";
import AuthStack from "./AuthStack";

const AuthRoutes = () => {
  const { user } = useContext(AuthContext);

  // Aqui você pode mostrar um loading se quiser verificar persistência
  // const [loading, setLoading] = useState(true); ← você pode usar isso futuramente

  return user ? <AppStack /> : <AuthStack />;
};

export default AuthRoutes;