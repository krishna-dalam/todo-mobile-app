import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { default as Login } from "./LoginScreen";
import { default as Register } from "./RegisterScreen";
import { default as ForgotPassword } from "./ForgotPasswordScreen";
import { colors } from "../../config";

const Stack = createStackNavigator();

function Authentication() {
  const options = {
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: colors.primary,
    },
  };
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={options} />
      <Stack.Screen name="Register" component={Register} options={options} />
      <Stack.Screen
        name="Forgot Password"
        component={ForgotPassword}
        options={options}
      />
    </Stack.Navigator>
  );
}

export default Authentication;

//Color palette : Player to Miles Color Palette
