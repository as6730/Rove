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

    let arts = this.state.arts;
    let bars = this.state.bars;
    let restaurants = this.state.restaurants;
    let nature = this.state.nature;

    if (!nature && !arts && !restaurants && !nature && !bars){
      arts = true;
      bars = true;
      restaurants = true;
      nature = true;
    }

    let itineraryParams = {arts, bars,restaurants, nature, date, lat, lon};

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
                <Text style={styles.textTitleStyle}>Choose Activities:</Text>
                <Text style={styles.textStyle}>Swipe Left or Right to Submit</Text>
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
                onPress={() => this.onButtonPress("bars")}
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
  textTitleStyle:{
    color: '#424242',
    paddingTop: 25,
    fontSize: 24,
    marginBottom: 20,
    fontWeight: '700',
    textAlign:"center"
  }, textStyle:{
      color: '#424242',
      fontSize: 20,
      marginBottom: 30,
      textAlign:"center"
    },
  modalBoxStyle:{
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    borderColor: "#FE5D26",
    borderWidth: 1,
  }
};


export default ActivityForm;
