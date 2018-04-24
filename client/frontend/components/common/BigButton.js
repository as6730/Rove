import React from "react";
import { Text, TouchableHighlight } from "react-native";

const BigButton = ({ onPress, children, isPressed, color}) => {
  let currentStyle;
  let currentText;

  if (isPressed){
    currentStyle = styles.pressedButtonStyle;
    currentText = styles.pressedTextStyle;
  } else {
    currentStyle = styles.buttonStyle;
    currentText = styles.textStyle;
  }
  return (
    <TouchableHighlight onPress={onPress}
      isPressed={isPressed}
      style={currentStyle,
        { backgroundColor: (isPressed ? color : "white"),
          borderColor: color,
          borderRadius: 5,
          borderWidth: 1,
          width: "100%"}}>
      <Text style={currentText}>{children}</Text>
    </TouchableHighlight>
  );
};

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "#fff",
    height: 150,
    minWidth: 150,
    opacity: .01,
  },
  pressedButtonStyle:{
    flex: 1,
    alignSelf: "stretch",
    height: 150,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#007aff",
    opacity: 0.5,
  },

  textStyle: {
    alignItems:'flex-end',
    color: "black",
    fontWeight: "600",
    fontSize: 24,
    paddingTop: 110,
    marginBottom: 10,
    paddingLeft: 20,
  },
  pressedTextStyle: {
    alignItems:'flex-end',
    color: "#fff",
    fontWeight: "600",
    fontSize: 24,
    paddingTop: 110,
    marginBottom: 10,
    paddingLeft: 20,
  }
};
export { BigButton };
