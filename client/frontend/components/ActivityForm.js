import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card, BigButton, CardSection } from './common';
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
            style = {styles.buttonStyle}
            onPress={() => this.onButtonPress("restaurants")}
            isPressed={this.state.restaurants}
            color="gray"
            imgUrl={require("../images/Food.jpg")}>
            Food
          </BigButton>
        </CardSection>

        <CardSection>
          <BigButton
            onPress={() =>this.onButtonPress("nature")}
            isPressed={this.state.nature}
            color="gray"
            imgUrl={require("../images/Nature.jpg")}>
            Nature
          </BigButton>
        </CardSection>

        <CardSection>
          <BigButton
            onPress={() =>this.onButtonPress("arts")}
            isPressed={this.state.arts}
            color="gray"
            imgUrl={require("../images/Culture.jpg")}>
            Culture
          </BigButton>
        </CardSection>

        <CardSection>
          <BigButton
            onPress={() =>this.onButtonPress("bars")}
            isPressed={this.state.bars}
            color="gray"
            imgUrl={require("../images/Nightlife.jpg")}>
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
  }
};

const mapStateToProps = (state) => {
  return console.log(state);
};

const mapDispatchToProps = (dispatch) => {

};

export default connect(null,null)(ActivityForm);
