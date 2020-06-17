import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { TodoNavigator as Todo } from "./screens/todo";
import { AuthenticationNavigator as Authentication } from "./screens/auth";

import { AuthContext } from "./context/AuthContext";

function AuthApp(props) {
  const [signedIn] = useContext(AuthContext);
  return (
    <NavigationContainer>
      {console.log(signedIn)}
      {signedIn.token ? <Todo /> : <Authentication />}
    </NavigationContainer>
  );
}

export default AuthApp;
