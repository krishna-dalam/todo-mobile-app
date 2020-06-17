import React, { useContext } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import * as Yup from "yup";

import {
  FormComponent as Form,
  FormInput as Input,
  FormButton,
} from "../../components/forms";
import { colors } from "../../config";
import { default as Button } from "../../components/ButtonComponent";
import { AuthContext } from "../../context/AuthContext";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen({ navigation }) {
  const [signedIn, setSignedIn] = useContext(AuthContext);
  return (
    <ImageBackground
      source={require("../../assets/blue_back.png")}
      style={styles.container}
    >
      <Form
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          console.log(signedIn);
          setSignedIn({ token: !signedIn.token });
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        <Input
          icon="email"
          name="email"
          placeholder="Email"
          style={styles.formInput}
        />
        <Input
          icon="lock"
          name="password"
          placeholder="Password"
          style={styles.formInput}
          secureTextEntry
        />
        <FormButton style={styles.formButton} title="Login" />
      </Form>
      <View style={styles.otherScreen}>
        <Button
          textStyle={styles.text}
          title="Register"
          onPress={() => navigation.navigate("Register")}
        />
        <Button
          textStyle={styles.text}
          title="Forgot Password ?"
          onPress={() => navigation.navigate("Forgot Password")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingVertical: 60,
    opacity: 0.9,
  },
  formInput: {
    backgroundColor: colors.white,
    marginTop: 20,
  },
  formButton: {
    marginTop: 20,
  },
  otherScreen: {
    marginTop: 5,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },
  text: {
    color: colors.white,
    fontWeight: "900",
  },
});

export default LoginScreen;
