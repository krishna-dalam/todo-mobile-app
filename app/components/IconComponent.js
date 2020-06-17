import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";

function Icon({
  name = "plus-circle",
  size = 44,
  iconContainerStyle,
  iconStyle,
  color = "#00c5ff",
}) {
  return (
    <View style={[StyleSheet.container, iconContainerStyle]}>
      <MaterialCommunityIcons
        style={iconStyle}
        color={color}
        name={name}
        size={size}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Icon;
