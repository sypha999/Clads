import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  favouritePhoto: {
    width: 36,
    height: 36,
    marginLeft: 8,
  },
  favouriteTitle: {
    marginLeft: 20,
    fontFamily: "Poppins_400Regular",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 13,
    lineHeight: 19,
    /* identical to box height */
    letterSpacing: 0.2,
    /* navy blue */
    color: "#0A2E65",
  },
  container: {
    flex: 1,
  },
  icon: {
    width: 40,
  },
  text: {
    fontFamily: "Poppins_400Regular",
    letterSpacing: 0.3,
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 13,
    lineHeight: 19,
  },
  card: {
    flexDirection: "row",
    borderColor: "#7F92B4",
    borderWidth: 1,
    margin: 6,
    alignItems: "center",
    borderRadius: 5,
  },
});
