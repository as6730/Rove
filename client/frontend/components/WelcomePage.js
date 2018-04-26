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
import {Calendar } from 'react-native-calendars';
import ActivityForm from "./ActivityForm";

class WelcomePage extends React.Component {
  constructor(props){
    super(props);
    let date = new Date;
    date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    this.state={
      city: '',
      date
    };

    this.setDate = this.setDate.bind(this);
    this.handleText = this.handleText.bind(this);
  }

  handleText(text){
    this.setState({city: text});
  }

  setDate(newDate) {
    this.setState({date: newDate.dateString});
    console.log(this.state);
  }


  navigate(){
    console.log(this);
    this.props.navigator.push({
    name: 'Activity', // Matches route.name
    });
  }



  render() {
    //// TODO: import link from controller
    let pic = {
      uri:`http://res.cloudinary.com/dkaolr6pg/image/upload/v1524615811/pretty.jpg`,
    };
    const {
      imageStyle,
      buttonStyle,
      questionStyle,
      containerStyle,
      questionContainer1,
      questionContainer2,
      calenderStyle
    } = styles;

    return (
      <View>
        <Image
          source={require('../images/rove_logo_orange.png')}
          style={imageStyle}/>
        <View style={questionContainer1}>
          <Text style={questionStyle}>Destination</Text>
            <Input
              value={this.state.city}
              onChangeText={(text) => this.handleText(text)}
              placeholder={"Where to?"}/>
          </View>
        <View style={questionContainer2}>
          <Text style={questionStyle}>When?</Text>
          <Calendar
            style={calenderStyle}
            minDate={Date()}
            onDayPress={(day)=> this.setDate(day)}
            theme={{
              textSectionTitleColor: '#b6c1cd',
              selectedDayBackgroundColor: '#FE5D26',
              selectedDayTextColor: '#FE5D26',
              selectedColor: '#FE5D26',
              arrowColor: '#FE5D26',
            }}
            />
            <Button
              color= '#FE5D26'
              style={buttonStyle}
              title={'Submit'}
              onPress={()=> this.navigate()}>'Submit'
            </Button>
        </View >
      </View>
    );
  }
}

const styles= {
  imageStyle: {
    width: "100%",
    height: "20%",
    padding: 10,
    marginTop: 40,
    marginBottom: 20,
  },
  buttonStyle:{
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#007aff",
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
  },
  questionContainer1: {
    width: '100%',
    padding: 10,
    flexDirection: "column",
    height: '15%',

  },
  questionContainer2: {
    width: '100%',
    padding: 10,
    flexDirection: "column",
    height: '40%',

  },
  questionStyle:{
    padding: 5,
    fontSize: 24,
    textAlign: 'center',
    backgroundColor: "#fff",
    flexDirection: 'row',
    position: "relative"
  },
  calenderStyle: {
    alignSelf: 'center',
    width: 300,
  }
};

const mapStateToProps = (state) => {

};

const mapDispatchToProps = (dispatch) => {

};

export default connect(null,null)(WelcomePage);
