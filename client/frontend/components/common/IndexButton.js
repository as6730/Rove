import React from "react";
import { Text, TouchableOpacity, Image} from "react-native";

//ActivityForm Large Button

const IndexButton = ({ onPress, children, isPressed, color, imgUrl}) => {
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
          borderRadius: 5,
          borderWidth: 1,
          height: 105,
          width: "100%"}}>
      <Image style={{height: '100%', width: "100%"}} source={imgUrl}/>>
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
    fontWeight: "400",
    fontFamily: 'Helvetica Neue',
    fontSize: 24,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 15,
    position: 'absolute',
  },
  pressedTextStyle: {
    fontFamily: 'Helvetica Neue',
    alignItems:'flex-start',
    color: "#fff",
    fontWeight: "400",
    fontSize: 24,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 15,
    position: 'absolute',
  }
};
export default IndexButton ;