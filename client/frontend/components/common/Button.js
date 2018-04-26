import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Button = ({ onPress, children }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
      <Text style={styles.textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FE5D26',
    // marginLeft: 5,
    // marginRight: 5,
  },
  textStyle: {
    alignSelf: "center",
    color: '#FE5D26',
    fontWeight: "600",
    fontSize: 16,
    paddingTop: 15,
    paddingBottom: 10,
  }
};
export { Button };
