import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { defaultStyles, colors } from "../config";

function TextInputComponent({
  placeholder,
  containerStyle,
  onChangeText,
  onBlur,
  icon,
  multiline = false,
  ...otherProps
}) {
  return (
    <View style={[styles.container, containerStyle]}>
      <MaterialCommunityIcons
        name={icon}
        size={25}
        color={colors.dark}
        style={styles.icon}
      />
      <TextInput
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={onChangeText}
        onBlur={onBlur}
        placeholder={placeholder}
        multiline={multiline}
        textStyle={defaultStyles.text}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: "#fff",
    borderRadius: 25,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
});

export default TextInputComponent;
