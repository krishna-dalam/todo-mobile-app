import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { ContextProvider } from "./app/context/AppContext";
import HomeScreen from "./app/screens/HomeScreen";
import AddTodoScreen from "./app/screens/AddTodoScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <ContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Todo"
            component={HomeScreen}
            options={{
              headerTintColor: "white",
              headerStyle: {
                backgroundColor: "#0078ff",
              },
            }}
          />
          <Stack.Screen
            name="Add Todo"
            component={AddTodoScreen}
            options={{
              headerTintColor: "white",
              headerStyle: {
                backgroundColor: "#0078ff",
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
}

export default App;

//Color palette : Player to Miles Color Palette
