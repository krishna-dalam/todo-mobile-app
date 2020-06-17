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
  email: Yup.string().required().email().label("Email"),
});

function ForgotPasswordScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../../assets/blue_back.png")}
      style={styles.container}
    >
      <Form
        initialValues={{ email: "" }}
        onSubmit={() => navigation.goBack()}
        validationSchema={validationSchema}
      >
        <Input
          icon="email"
          name="email"
          placeholder="Email"
          style={styles.formInput}
        />
        <Button style={styles.formButton} title="Reset Password" />
      </Form>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    padding: 15,
    opacity: 0.9,
  },
  formInput: {
    backgroundColor: colors.white,
    marginTop: 15,
  },
  formButton: {
    marginTop: 15,
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

export default ForgotPasswordScreen;
