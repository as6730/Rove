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
import {Calendar } from 'react-native-calendars';
import ActivityForm from "./ActivityForm";

class WelcomePage extends React.Component {
  constructor(props){
    super(props);
    this.state={
      city: '',
      selected: new Date()
    };

    this.setDate = this.setDate.bind(this);
    this.handleText = this.handleText.bind(this);
    this.renderActivities = this.renderActivities.bind(this);
  }

  handleText(text){
    this.setState({city: text});
  }

  setDate(newDate) {
    this.setState({selected: newDate.dateString});
    console.log(this.state);
  }

  renderActivities(newDate) {
    return (
      <ActivityForm city={this.state.city} date={this.state.selected} />
    );
  }

  render() {
    //// TODO: import link from controller
    let pic = {
      uri:`http://res.cloudinary.com/dkaolr6pg/image/upload/v1524615811/pretty.jpg`,
    };
    const { imageStyle, buttonStyle, questionStyle, containerStyle } = styles;
    return (
      <View>
        <Image
          source={{ uri:`https://duranvirginia.files.wordpress.com/2014/02/virginia-duran-blog-10-sites-to-take-the-best-skyline-pictures-in-san-francisco-mandarin-oriental-at-dusk.jpg`}}
          style={imageStyle}/>
        <View style={questionStyle}>
          <Text style={questionStyle}>Where Are You Going?</Text>
            <Input
              value={this.state.city}
              onChangeText={(text) => this.handleText(text)}
              placeholder={"San Francisco"}
              ></Input>
          </View>
        <View style={questionStyle}>
          <Text>When?</Text>
        </View >
          <Calendar
           current={this.state.chosenDate}
           minDate={Date()}
           onDayPress={(day)=> this.setDate(day)}
          />
        <Button title={'Submit'}
          onPress={()=> this.renderActivities()}>'Submit'
        </Button>
      </View>
    );
  }
}

const styles= {
  imageStyle: {
    // width: "25%",
    height: "25%",
    marginTop: "5%",
    alignSelf: "stretch"
  },buttonStyle:{
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
  questionStyle:{
    padding: 5,
    backgroundColor: "#fff",
    flexDirection: "row",
    position: "relative"
  }
};

const mapStateToProps = (state) => {

};

const mapDispatchToProps = (dispatch) => {

};

export default connect(null,null)(WelcomePage);
