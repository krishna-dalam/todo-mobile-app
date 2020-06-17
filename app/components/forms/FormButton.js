import React from "react";
import { StyleSheet } from "react-native";
import { useFormikContext } from "formik";
import { default as Button } from "../ButtonComponent";

function FormButton({ title, style }) {
  const { handleSubmit } = useFormikContext();
  return (
    <Button
      title={title}
      onPress={handleSubmit}
      buttonStyle={[styles.container, style]}
      textStyle={styles.text}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0c5c8a",
  },
  text: {
    textTransform: "uppercase",
    color: "#fff",
    fontWeight: "bold",
  },
});

export default FormButton;
