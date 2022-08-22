import { Divider } from "react-native-paper";
import { StyleSheet } from "react-native";

const ComponentDivider = (props) => (
  <Divider style={[styles.dividerStyle, props.style]} />
);

const styles = StyleSheet.create({
  dividerStyle: {
    borderWidth: 0.5,
    borderColor: "#C4C4C4",
    marginBottom: 12,
    marginTop: 12,
  },
});

export default ComponentDivider;
