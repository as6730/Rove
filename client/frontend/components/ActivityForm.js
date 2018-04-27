import React from 'react';
import { View,
  Text,
  Image,
TouchableHighlight  } from 'react-native';
import { Card,
  BigButton,
  CardSection,
  SwipeableCard } from './common';
import { connect } from "react-redux";
import { fetchItinerary } from "../actions/ItineraryActions";
import Modal from "react-native-modal";

class ActivityForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      nature: null,
      restaurants: null,
      arts: null,
      bars: null,
      modalVisible: true,
    };

    this.onButtonPress = this.onButtonPress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  // renderError(){
  // if (this.props.error){
  //     return (
  //       <View style={{backgroundColor:'white'}}>
  //         <Text style={styles.errorTextStyle}>
  //           {this.props.error}
  //         </Text>
  //       </View>
  //     );
  //   }
  // }

  //knows if this thing is selected -> set
  onButtonPress(value){
    if (this.state[value]){
      return this.setState({[value]: false });
    } else {
      this.setState({[value]: true });
    }
  }

  handleSubmit(){
    let date = this.props.place.date;
    let lat = this.props.place.lat;
    let lon = this.props.place.lng;

    let itineraryParams = {arts:this.state.arts, bars:this.state.bars,
      restaurants: this.state.restaurants,nature:this.state.nature,
      date, lat, lon};

      // let itineraryParams = {
      //   lat : "37.801773",
      //   lon : "-122.401026",
      //   bars : "true",
      //   restaurants : "true",
      //   nature : "true",
      //   arts : "true"
      // };

    this.props.navigator.replace({
      name: 'Index',
      passProps: {
          itineraryParams
          }
    });
  }

  toggleModal(){
    this.setState({ modalVisible: false });
  }

  render(){

    return (
      <View style={{ flex: 1 }}>
        <Modal backdropColor="#dddddd"
          isVisible={this.state.modalVisible}
          supportedOrientations={['portrait', 'landscape']}
          onBackdropPress={() => this.setState({ modalVisible: false })}>
            <TouchableHighlight onPress={() => this.toggleModal()}>
              <View style={styles.modalBoxStyle}>
                <Text style={styles.textStyle}>
                  On this next Page you'll be choosing the Activities
                  you want for your itinerary.
                  Swipe left or right to Submit!
                </Text>
              </View>
            </TouchableHighlight>
          </Modal>
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
                onPress={() =>this.onButtonPress("bars")}
                isPressed={this.state.bars}
                color="gray"
                imgUrl={require("../images/Nightlife.jpg")}>
                  NightLife
              </BigButton>
            </CardSection>
          </Card>
        </SwipeableCard>
      </View>
    );
  }

}

const styles = {
  errorTextStyle:{
    fontSize: 20,
    alignSelf: 'center',
    color:'red'
  },
  textStyle:{
    color: '#FE5D26',
    fontSize: 20,
    marginBottom: 100,
  }, modalBoxStyle:{
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  }
};


export default ActivityForm;
