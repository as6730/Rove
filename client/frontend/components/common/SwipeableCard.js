import { Animated, View, PanResponder, Text, Dimensions} from "react-native";
import React from "react";

export class SwipeableCard extends React.Component {
  translateX = new Animated.Value(0);
  _panResponder = PanResponder.create({
    onMoveShouldSetResponderCapture: () => true,
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderMove: Animated.event([null, {dx: this.translateX}]),
    onPanResponderRelease: (e, {vx, dx}) => {
      const screenWidth = Dimensions.get("window").width;
      if (vx >= 0.003 ) {
        console.log(vx);
        this.props.swipeBack();
      } else {
        this.props.onSwipe();
        console.log(vx);
      }
    }
  });

  render() {
    return (
      <View>
        <Animated.View
          style={{transform: [{translateX: this.translateX}], height: 75}} {...this._panResponder.panHandlers}>
          {this.props.children}
        </Animated.View>
      </View>
    );
  }
}
