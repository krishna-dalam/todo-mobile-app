import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { ContextProvider } from "../../context/AppContext";
import { default as Todo } from "./TodoScreen";
import { default as AddTodo } from "./AddTodoScreen";

const Stack = createStackNavigator();

function TodoApp() {
  return (
    <ContextProvider>
      <Stack.Navigator>
        <Stack.Screen
          name="Todo"
          component={Todo}
          options={{
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: "#0078ff",
            },
          }}
        />
        <Stack.Screen
          name="Add Todo"
          component={AddTodo}
          options={{
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: "#0078ff",
            },
          }}
        />
      </Stack.Navigator>
    </ContextProvider>
  );
}

export default TodoApp;

//Color palette : Player to Miles Color Palette
