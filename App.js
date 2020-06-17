import React from "react";

import TodoApp from "./app/TodoApp";
import { AuthContextProvider } from "./app/context/AuthContext";

function App() {
  // setSignedIn({ token: true });
  return (
    <AuthContextProvider>
      <TodoApp />
    </AuthContextProvider>
  );
}

export default App;

//Color palette : Player to Miles Color Palette
