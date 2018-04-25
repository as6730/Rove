import React from 'react';
import { View,
  Text,
  PanResponder,
  Animated  } from 'react-native';
import { Card, BigButton, CardSection, SwipeableCard } from './common';
import { connect } from "react-redux";

class ActivityForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      nature: null,
      restaurants: null,
      arts: null,
      bars: null
    };

    this.onButtonPress = this.onButtonPress.bind(this);
  }

  handleSubmit(){
    // (date, lat, lon, nature, restaurants, arts, bars);
  }

  renderError(){
  if ( this.props.error){
      return (
        <View style={{backgroundColor:'white'}}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </View>
      );
    }
  }

  //knows if this thing is selected -> set
  onButtonPress(value){
    if (this.state[value]){
      return this.setState({[value]: false });
    } else {
      this.setState({[value]: true });
    }
  }

  render(){
    return (
      <Card>
          <CardSection>
            <BigButton
              onPress={() => this.onButtonPress("restaurants")}
              isPressed={this.state.restaurants}
              color="blue">
              Food
            </BigButton>
          </CardSection>

          <CardSection>
            <BigButton
              onPress={() =>this.onButtonPress("nature")}
              isPressed={this.state.nature}
              color="red">
              Nature
            </BigButton>
          </CardSection>

          <CardSection>
            <BigButton
              onPress={() =>this.onButtonPress("arts")}
              isPressed={this.state.arts}
              color="green">
              Culture
            </BigButton>
          </CardSection>

          <CardSection>
            <BigButton
              onPress={() =>this.onButtonPress("bars")}
              isPressed={this.state.bars}
              color="purple">
                NightLife
            </BigButton>
          </CardSection>
      </Card>
    );
  }

}

const styles = {
  errorTextStyle:{
    fontSize: 20,
    alignSelf: 'center',
    color:'red'
  },
};

const mapStateToProps = (state) => {
  return console.log(state);
};

const mapDispatchToProps = (dispatch) => {

};

export default connect(null,null)(ActivityForm);
