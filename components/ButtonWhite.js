import React, { Component } from "react";
import { TouchableOpacity, Text } from "react-native";
import WhiteButtonStyle from "../screens/component.styles/WhiteButton.style";

const ButtonWhite = (props) => {
  return (
    <TouchableOpacity
      style={[WhiteButtonStyle.container, props.style]}
      onPress={props.event}
    >
      <Text style={WhiteButtonStyle.caption}>{props.caption || "BUTTON"}</Text>
    </TouchableOpacity>
    //if the caption for this component is not provided the default title will be BUTTON
  );
};

export default ButtonWhite;
