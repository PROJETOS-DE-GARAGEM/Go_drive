import React from "react";
import { AuthProvider } from "./AuthContext";

type AppProviderProps = {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return(
    <AuthProvider>
        {children}
    </AuthProvider>
  )
}