import React from "react";
import { Button } from "react-native-elements";
import { Icon } from "react-native-vector-icons/FontAwesome";
import { IconButton } from "react-native-paper";

const HeartIcon = () => {
  return (
    <IconButton
      icon="heart"
      size={24}
      mode="contained"
      color="red"
      //style={styles.searchButton}
    />
  );
};
export default HeartIcon;
