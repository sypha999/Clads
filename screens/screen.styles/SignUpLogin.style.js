import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,102,245,1)",
    borderRadius: 1,
    borderWidth: 1,
    alignItems: "center",
    borderColor: "#000000",
  },
  Wrapper: {
    height: hp("90%"), // 70% of height device screen
    width: wp("100%"), // 80% of width device screen
  },

  image: {
    width: 210,
    height: 55,
    marginTop: 160,
    alignSelf: "center",
  },
  loremIpsum: {
    color: "#fff",
    marginTop: 20,
    fontWeight: "bold",
    alignSelf: "center",
  },

  ButtomsView: {
    height: hp("70%"),
  },
  ButtonWithBlueText: {
    height: 42,
    width: wp("90%"),

    alignSelf: "center",
    fontWeight: "bold",
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 5,

    marginTop: 120,
  },

  ButtonWhite: {
    height: 42,
    width: wp("90%"),

    alignSelf: "center",

    fontWeight: "bold",
    backgroundColor: "rgba(0,102,245,1)",
    borderWidth: 2.5,
    borderColor: "#fff",
    borderRadius: 5,
    marginTop: 19,
  },
});
