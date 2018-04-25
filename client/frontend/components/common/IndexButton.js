import React from "react";
import { Text, TouchableOpacity } from "react-native";

//ActivityForm Large Button

const IndexButton = ({ onPress, children, isPressed, color}) => {
  let currentStyle;
  let currentText;

//will change style based on state of being Pressed
  if (isPressed){
    currentStyle = styles.pressedButtonStyle;
    currentText = styles.pressedTextStyle;
  } else {
    currentStyle = styles.buttonStyle;
    currentText = styles.textStyle;
  }
  return (
    <TouchableOpacity onPress={onPress}
      isPressed={isPressed}
      style={currentStyle,
        { backgroundColor: (isPressed ? color : "white"),
          borderColor: color,
          borderRadius: 5,
          borderWidth: 1,
          height: 105,
          width: "100%"}}>
      <Text style={currentText}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "#fff",
    height: 100,
    minWidth: 150,
  },
  pressedButtonStyle:{
    flex: 1,
    alignSelf: "stretch",
    height: 150,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#007aff",
  },
  textStyle: {
    alignItems:'flex-start',
    color: "black",
    fontWeight: "600",
    fontSize: 24,
    marginTop: 20,
    marginBottom: 10,
    paddingLeft: 20,
  },
  pressedTextStyle: {
    alignItems:'flex-start',
    color: "#fff",
    fontWeight: "600",
    fontSize: 24,
    marginTop: 20,
    marginBottom: 10,
    paddingLeft: 20,
  }
};
export default IndexButton ;
