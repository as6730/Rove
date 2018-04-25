import React from 'react';
import { connect } from "react-redux";
import {
  View,
  Text,
  Image,
  Keyboard,
} from 'react-native';
import { Input, Header, Card, CardSection, Button } from "./common";
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
      uri: `server/app/assets/images/sf_city.jpg`,
    };

    return (
      <Card>
        <CardSection>
          <Text>Where Are You Going?</Text>
            <Input
              value={this.state.city}
              onChangeText={(text) => this.handleText(text)}
              placeholder={"San Francisco"}
              ></Input>
        </CardSection>
        <CardSection>
          <Text>When?</Text>
        </CardSection>
          <Calendar
           current={this.state.chosenDate}
           minDate={Date()}
           onDayPress={(day)=> this.setDate(day)}
          />
        <Button onPress={()=> this.renderActivities()}>Submit</Button>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {

};

const mapDispatchToProps = (dispatch) => {

};

export default connect(null,null)(WelcomePage);
