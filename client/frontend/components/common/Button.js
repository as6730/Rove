import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Button = ({ onPress, children }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.buttonStyle}>
      <Text style={styles.textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    alignSelf: 'center',
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FE5D26',
    height: 30,
    width: '40%',
    marginTop: 215,
  },
  textStyle: {
    alignSelf: 'center',
    paddingTop: 3,
    color: '#FE5D26',
    fontWeight: "600",
    fontSize: 16,
  }
};
export { Button };
