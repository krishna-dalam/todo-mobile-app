import React, { useState, createContext } from "react";

const TodoContext = createContext([[], () => []]);

function ContextProvider({ children }) {
  const [todos, setTodos] = useState([]);
  return (
    <TodoContext.Provider value={[todos, setTodos]}>
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, ContextProvider };
