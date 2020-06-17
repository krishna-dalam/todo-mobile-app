import React, { useState, createContext } from "react";

const AuthContext = createContext([{}, () => {}]);

function AuthContextProvider({ children }) {
  const [signedIn, setSignedIn] = useState({ token: true });
  return (
    <AuthContext.Provider value={[signedIn, setSignedIn]}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextProvider };
