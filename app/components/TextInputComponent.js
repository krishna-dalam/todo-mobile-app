import React from "react";
import { StyleSheet, TextInput } from "react-native";

function TextInputComponent({ placeholder, style, onChangeText }) {
  return (
    <TextInput
      autoCorrect={false}
      onChangeText={onChangeText}
      style={[styles.textInput, style]}
      placeholder={placeholder}
      multiline={true}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    width: "100%",
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: "#fff",
    borderRadius: 25,
  },
});

export default TextInputComponent;
