import React, { createContext, useState } from "react";

// Créer un contexte pour l'authentification
const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // l'utilisateur connecté

  const login = (userData) => {
    setUser(userData); // connecte l'utilisateur
  };

  const logout = () => {
    setUser(null); // déconnecte l'utilisateur
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};