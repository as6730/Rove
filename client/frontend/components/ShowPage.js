import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import { Button } from './common';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import RNCalendarEvents from 'react-native-calendar-events';
import { authorizationStatus } from 'react-native-calendar-events';
import NativeModules  from 'react-native';

// TODO: Import marker for lat and long that are being passed in


class ShowPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cal_auth: ''
    };

    this.submit = this.submit.bind(this);
  }

  componentWillMount () {
  // Let's get access before doing anything
  // const events = RNCalendarEvents;
  RNCalendarEvents.authorizationStatus()
  .then(status => {
    // if the status was previous accepted, set the authorized status to state

    this.setState({ cal_auth: status });
    if(status === 'undetermined') {
      // if we made it this far, we need to ask the user for access
      RNCalendarEvents.authorizeEventStore()
      .then((out) => {
        if(out == 'authorized') {
          // set the new status to the auth state
          this.setState({ cal_auth: out });
        }
      });
    }
  })
  .catch(error => console.warn('Auth Error: ', error));
}

  submit(){
    RNCalendarEvents.authorizeEventStore().then(response => alert(response));
    // RNCalendarEvents.authorizationStatus()
    // .then(status => {
    //   // handle status
    //   console.log(status);
    // })
    // .catch(error => {
    //   console.log(error);
    // });
    // const find = RNCalendarEvents.findCalendars;
    // console.log(find);
    // RNCalendarEvents.authorizationStatus().then((response) => { return response.json();})
    // .then((responseJSON) => { return(this.setState({ auth: responseJSON }));
    // });
  }
    // RNCalendarEvents.saveEvent('Title of event', {
    //     calendarId: '141',
    //     startDate: '2016-08-19T19:26:00.000Z',
    //     endDate: '2017-08-19T19:26:00.000Z'
    //   });

  // navigate(){
  //   this.getLocationFromGoogle(this.state.city);
  //   console.log(this.state.lat);
  //   console.log(this.state.lng);
  //
  //   let locationProps= { lat: this.state.lat,
  //     lng: this.state.lng,
  //     date: this.state.date};
  //     console.log(locationProps);
  //   this.props.navigator.replace({
  //   name: 'Activity',
  //   passProps: {
  //         place: locationProps
  //       }
  //   });
  // }
  render() {
    const marker = {
      latitude: 37.773972,
      longitude: -122.431297,
    };

    return (
      <View style = {styles.container}>
        <Image
          style = {styles.image}
          source={{ uri: `https://duranvirginia.files.wordpress.com/2014/02/virginia-duran-blog-10-sites-to-take-the-best-skyline-pictures-in-san-francisco-mandarin-oriental-at-dusk.jpg`}}
          />
        <View style = {styles.info}>
          <View style = {styles.contactInfo}>
            <Text style = {styles.title} >Good Food</Text>
            <Text>2343 Battery St.</Text>
            <Text>San Francisco, CA 98437</Text>
            <Text>(555)-555-5555</Text>
            <Text>Visit Website</Text>
          </View>
        </View>
        <View style = {styles.mapContainer}>
          <MapView
            annotations={marker}
            provider={'google'}
            style = {styles.map}
            initialRegion={{
              latitude: 37.773972,
              longitude: -122.431297,
              latitudeDelta: 0.0092,
              longitudeDelta: 0.0421,
            }}/>
        </View>
        <Button onPress={()=> this.submit()} children={"Add to Calendar"}></Button>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  info: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 25,
    height: '50%',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#FE5D26',
  },
  image: {
    height: '25%',
    width: '100%',
  },
  mapContainer: {
    height: '50%',
  },
  map: {
    height: '100%',
  },
});

export default ShowPage;
