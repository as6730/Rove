import { Animated, View, PanResponder, Text, Dimensions} from "react-native";
import React from "react";

export class SwipeableCard extends React.Component {
  translateX = new Animated.Value(0);
  _panResponder = PanResponder.create({
    onMoveShouldSetResponderCapture: () => true,
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderMove: Animated.event([null, {dx: this.translateX}]),
    onPanResponderRelease: (e, {vx, dx}) => {
      console.log("help!");
      const screenWidth = Dimensions.get("window").width;
      if (Math.abs(vx) >= 0.5 || Math.abs(dx) >= 0.5 * screenWidth) {
        Animated.timing(this.translateX, {
          toValue: dx > 0 ? screenWidth : -screenWidth,
          duration: 200
        }).start(this.props.onDismiss);
      } else {
        Animated.spring(this.translateX, {
          toValue: 0,
          bounciness: 10
        }).start();
      }
    }
  });

  render() {
    return (
      <View>
        <Animated.View
          style={{transform: [{translateX: this.translateX}], height: 75}} {...this._panResponder.panHandlers}>
          <Text>
            {this.props.title}
          </Text>
        </Animated.View>
      </View>
    );
  }
}
