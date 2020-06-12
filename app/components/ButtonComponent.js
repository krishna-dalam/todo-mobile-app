import React from "react";
import { StyleSheet, TouchableHighlight, Text } from "react-native";

function ButtonComponent({ buttonStyle, onPress, textStyle }) {
  return (
    <TouchableHighlight onPress={onPress} style={[styles.button, buttonStyle]}>
      <Text style={textStyle}>{"Add Todo"}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
});

export default ButtonComponent;
