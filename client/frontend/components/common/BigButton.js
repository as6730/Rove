import React from "react";
import { Text, TouchableOpacity, Image } from "react-native";

//ActivityForm Large Button

const BigButton = ({ onPress, children, isPressed, color, imgUrl}) => {
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
        { backgroundColor: 'transparent',
          borderColor: '#FE5D26',
          borderBottomWidth: 1,
          width: "100%",
          height: 160.5,
          position: 'relative'}}>
      <Image style={{height: '100%', width: "100%"}} source={imgUrl}/>
      <Text style={currentText}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    flex: 1,
    backgroundColor: 'transparent',
    minWidth: '100%',
    height: '125',
    position: 'absolute',
    borderBottomWidth: 4,
  },
  pressedButtonStyle:{
    flex: 1,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#007aff",
  },
  textStyle: {
    fontFamily: 'Helvetica Neue',
    color: "#424242",
    fontWeight: "600",
    fontSize: 36,
    paddingTop: 115,
    marginBottom: 20,
    paddingLeft: 10,
    position: "absolute",
    borderBottomWidth: 4,
  },
  pressedTextStyle: {
    color: "#424242",
    fontWeight: "700",
    fontSize: 56,
    paddingTop: 95,
    marginBottom: 20,
    paddingLeft: 10,
    position: "absolute",
  }
};
export { BigButton };
