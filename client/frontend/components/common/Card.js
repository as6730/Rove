import React from "react";
import { View } from "react-native";

const Card = props => {
  return <View style={styles.containerStyle}>{props.children}</View>;
};

const styles = {
  containerStyle: {
    borderRadius: 2,
    borderColor: "#FE5D26",
    borderTopWidth: 1,
    flex: 1,
    // shadowColor: "#fff",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 2,
    elevation: 1,
    marginTop: 20,
  }
};

export { Card };
