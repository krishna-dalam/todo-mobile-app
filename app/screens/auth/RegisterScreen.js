import React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import * as Yup from "yup";

import {
  FormComponent as Form,
  FormInput as Input,
  FormButton as Button,
} from "../../components/forms";
import { colors } from "../../config";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(3).label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../../assets/blue_back.png")}
      style={styles.container}
    >
      <Form
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={() => navigation.goBack()}
        validationSchema={validationSchema}
      >
        <Input
          icon="account"
          name="name"
          placeholder="Name"
          style={styles.formInput}
        />
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
        <Button style={styles.formButton} title="Register" />
      </Form>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingVertical: 50,
  },
  formInput: {
    backgroundColor: colors.white,
    marginTop: 20,
  },
  formButton: {
    marginTop: 20,
  },
  otherScreen: {
    marginTop: 15,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },
  text: {
    color: colors.lightBlue,
    fontWeight: "900",
  },
});

export default RegisterScreen;
