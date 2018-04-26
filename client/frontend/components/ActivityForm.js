import React from 'react';
import { View,
  Text,
  PanResponder,
  Animated,
  Image  } from 'react-native';
import { Card, BigButton, CardSection, SwipeableCard } from './common';
import { connect } from "react-redux";
import { fetchItinerary } from "../actions/ItineraryActions";
import Swiper from 'react-native-swiper';

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
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(){
    let date = this.props.date;
    let city = this.props.city;
    let itineraryParams = Object.assign(this.state, {}, {date:date, city:city});
    // let itinerary = this.props.fetchItinerary(itineraryParams);
    // console.log(itinerary);
    this.props.navigator.replace({
      name: 'Index',
    });
  }

  render(){
    return (
      <SwipeableCard onSwipe={() => this.handleSubmit()}>
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
              onPress={() =>this.handleSubmit()}
              isPressed={this.state.bars}
              color="gray"
              imgUrl={require("../images/Nightlife.jpg")}>
                NightLife
            </BigButton>
          </CardSection>
        </Card>
      </SwipeableCard>
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

const mapDispatchToProps = (dispatch) => ({
  fetchItinerary: (itineraryParams) => dispatch(fetchItinerary(itineraryParams))
});

export default connect(null,mapDispatchToProps)(ActivityForm);
