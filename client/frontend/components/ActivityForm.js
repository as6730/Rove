import React from 'react';
import { View, Text } from 'react-native';
import { Card, BigButton, CardSection } from './common';
import { connect } from "react-redux";

class ActivityForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      nature: null,
      food: null,
      culture: null,
      nightlife: null
    };

    this.onButtonPress = this.onButtonPress.bind(this);
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

  onButtonPress(value){
    if (this.state[value]){
      return this.setState({[value]: false });
    }else {
      this.setState({[value]: true });
    }
  }

  render(){
    return (
      <Card>
        <CardSection>
          <BigButton
            onPress={() => this.onButtonPress("food")}
            isPressed={this.state.food}
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
            onPress={() =>this.onButtonPress("culture")}
            isPressed={this.state.culture}
            color="green">
            Culture
          </BigButton>
        </CardSection>

        <CardSection>
          <BigButton
            onPress={() =>this.onButtonPress("nightlife")}
            isPressed={this.state.nightlife}
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
