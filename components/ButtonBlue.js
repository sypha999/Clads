import React from "react";
import { TouchableOpacity, Text } from "react-native";
import BlueButtonStyles from "../screens/component.styles/BlueButton.styles";

const ButtonBlue = (props) => {
  return (
    <TouchableOpacity
      onPress={props.event}
      style={[BlueButtonStyles.container, props.style]}
    >
      <Text style={BlueButtonStyles.caption}>{props.caption || "BUTTON"}</Text>
    </TouchableOpacity>
  );
};

export default ButtonBlue;
