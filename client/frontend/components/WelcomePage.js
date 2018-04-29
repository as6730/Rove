import React from 'react';
import { connect } from "react-redux";
import {
  View,
  Text,
  Image,
  Keyboard,
  Button
} from 'react-native';
import { Input, CardSection } from "./common";
import { Navigator } from 'react-native-deprecated-custom-components';
import { Calendar } from 'react-native-calendars';
import ActivityForm from "./ActivityForm";
import { fetchItinerary } from "./../actions/ItineraryActions";

class WelcomePage extends React.Component {
  constructor(props){
    super(props);
    let date = new Date;
    date = this.converDate(date)

    this.state = {
      city: '',
      date,
      lat: '',
      lng: '',
      hasError: false,
    };

    this.setDate = this.setDate.bind(this);
    this.handleText = this.handleText.bind(this);
    this.navigate = this.navigate.bind(this);
    this.errors = this.errors.bind(this);
  }

  handleText(text){
    this.setState({city: text});
  }

  setDate(newDate) {
    this.setState({date: newDate.dateString});
  }

  converDate(date) {
     const yyyy = date.getFullYear().toString();
     const mm = (date.getMonth() + 1).toString();
     const dd = date.getDate().toString();

     let mmChars = mm.split("");
     let ddChars = dd.split("");
     return yyyy + '-' + (mmChars[1] ? mm : "0" + mmChars[0]) + "-" + (ddChars[1] ? dd : "0" + ddChars[0]) ;
 }

  errors(){
    if (this.state.hasError === undefined || this.state.hasError === false){
      return null
    } else {
      return(
        <Text style={styles.errorStyle}>Invalid City</Text>
      )
    }
  }

  async navigate(){
    let location = await this.getLocationFromGoogle(this.state.city);
    if (location["results"].length == 0){
      this.setState({ hasError: true })
      this.errors()
    } else {
      this.setState({lat:
        location["results"][0]["geometry"]["location"]["lat"]})
      this.setState({lng:
        location["results"][0]["geometry"]["location"]["lng"]})

      let locationProps= { lat: this.state.lat,
        lng: this.state.lng,
        date: this.state.date};
      this.props.navigator.push({
      name: 'Activity',
      passProps: {
            place: locationProps
          }
      });
    }
  }

  async getLocationFromGoogle(city) {
    if ( city === ''){
      city = "San Francisco"
    }

    URL = `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&sensor=false`;
    let response = await fetch(URL)
    let JSONresponse = await response.json()
    return JSONresponse;

  }


  render() {
    //// TODO: import link from controller
    const {
      imageStyle,
      logoStyle,
      buttonStyle,
      questionStyle,
      containerStyle,
      questionContainer1,
      questionContainer2,
      calenderStyle,
      errorStyle,
    } = styles;

    const mark = {
       [this.state.date] : {selected: true, selectedColor:'#FE5D26'}
    };

    return (
      <View>
        <Image
          source={require('../images/sf_city.jpg')}
          style={imageStyle}/>
        <Image
          source={require('../images/rove_logo_orange.png')}
          style={logoStyle}/>
        <View style={questionContainer1}>
          <Text style={questionStyle}>Destination</Text>
            <Input
              value={this.state.city}
              onChangeText={(text) => this.handleText(text)}
              placeholder={"Where to?"}/>
            <View>{this.errors()}</View>
          </View>
        <View style={questionContainer2}>
          <Text style={questionStyle}>When?</Text>
          <Calendar
            style={calenderStyle}
            onDayPress={(day) => this.setDate(day)}
            hideExtraDays={true}
            markedDates={mark}
            theme={{
              textSectionTitleColor: '#b6c1cd',
              selectedDayTextColor: '#fff',
              selectedColor: '#FE5D26',
              arrowColor: '#FE5D26',
              todayTextColor: '#FE5D26',
            }}
            />
        </View >
        <View transform={[{translateY: 115}]}>
        <Button
          color= '#FE5D26'
          style={buttonStyle}
          title={'Submit'}
          onPress={()=> this.navigate()}>
          'Submit'
        </Button>
        </View>
      </View>
    );
  }
}

const styles = {
  imageStyle: {
    width: "100%",
    height: "26%",
    marginTop: 20,
    marginBottom: 5,
    position: 'absolute',
  },
  errorStyle: {
    height: 16,
    color: "#FE5D26",
    textAlign: 'center',
    width: '100%',
  },
  logoStyle: {
    width: "100%",
    height: "25%",
    marginTop: 23,
    marginBottom: 5,
    backgroundColor: 'rgba(236, 236, 236, 0.3)',
  },
  buttonStyle:{
    flex: 1,
    alignSelf: "stretch",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#007aff",
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    backgroundColor: 'transparent',
    position: 'fixed',
    // transform: [{translateY: -20}]
  },
  questionContainer1: {
    width: '100%',
    flexDirection: "column",
    height: '15%',
    backgroundColor: 'transparent',
  },
  questionContainer2: {
    width: '100%',
    padding: 10,
    flexDirection: "column",
    height: '40%',
    backgroundColor: 'transparent',
  },
  questionStyle:{
    padding: 5,
    fontSize: 24,
    textAlign: 'center',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    position: "relative"
  },
  calenderStyle: {
    alignSelf: 'center',
    width: 300,
    backgroundColor: 'transparent',
  }
};


export default WelcomePage;
