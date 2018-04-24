import React from 'react';
import {
  View,
  Text,
  Image,
  Keyboard,
} from 'react-native';
import { Input, Header, Card, CardSection } from "./common";
import {Calendar } from 'react-native-calendars';


class WelcomePage extends React.Component {
  constructor(props){
    super(props);
    this.state={
      city: '',
      chosenDate: new Date()
    };

    this.setDate = this.setDate.bind(this);
    this.handleText = this.handleText.bind(this);
  }

  handleText(text){
    this.setState({city: text});
  }

  setDate(newDate) {
    this.setState({chosenDate: newDate});
  }

  converDate(date) {
    const yyyy = date.getFullYear().toString();
    const mm = (date.getMonth() + 1).toString();
    const dd = date.getDate().toString();

    let mmChars = mm.split("");
    let ddChars = dd.split("");
    return yyyy + '-' + (mmChars[1] ? mm : "0" + mmChars[0]) + "-" +
    (ddChars[1] ? dd : "0" + ddChars[0]) ;
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
              onChangeText={() => this.handleText}
              placeholder={"San Francisco"}></Input>
        </CardSection>
        <Text>When?</Text>
          <Calendar
           current={this.state.chosenDate}
           minDate={Date()}
           onDayPress={this.setDate}
          />
      </Card>
    );
  }
}

// const mapStateToProps = (state) => {
//   return console.log(state);
// };
//
// const mapDispatchToProps = (dispatch) => {
//
// };
//
// export default connect(null,null)(ActivityForm);


export default WelcomePage;
