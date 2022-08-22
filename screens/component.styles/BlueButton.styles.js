import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#CCCCCC",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16,
  },
  caption: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },
});
