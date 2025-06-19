import React from "react";
import { AuthProvider } from "./AuthContext";
import { HomeProvider } from "./homeContext";

type AppProviderProps = {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return(
    <AuthProvider>
      <HomeProvider>
        {children}
      </HomeProvider>
    </AuthProvider>
  )
}