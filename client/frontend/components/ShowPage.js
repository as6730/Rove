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
import Permissions from 'react-native-permissions'

// TODO: Import marker for lat and long that are being passed in


class ShowPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cal_auth: ''
    };

    this.submit = this.submit.bind(this);
  }

//   componentWillMount () {
//   // Let's get access before doing anything
//   // const events = RNCalendarEvents;
//   RNCalendarEvents.authorizationStatus()
//   .then(status => {
//     // if the status was previous accepted, set the authorized status to state
//
//     this.setState({ cal_auth: status });
//     if(status === 'undetermined') {
//       // if we made it this far, we need to ask the user for access
//       RNCalendarEvents.authorizeEventStore()
//       .then((out) => {
//         if(out == 'authorized') {
//           // set the new status to the auth state
//           this.setState({ cal_auth: out });
//         }
//       });
//     }
//   })
//   .catch(error => console.warn('Auth Error: ', error));
// }

  addEventToCalendar() {
    RNCalendarEvents.findCalendars().then(response => {
      console.log("calendars:" +  JSON.stringify(response));
      let calendarId = response[0].id;
      console.log("calendarId: " + calendarId);
      RNCalendarEvents.saveEvent('Sample Event', {
          calendarId: calendarId,
          startDate: '2018-04-29T19:26:00.000Z',
          endDate: '2018-04-29T20:26:00.000Z'
        });
    });

  }

  submit(){
    Permissions.check('event').then(response => {
      this.setState({ eventPermission: response })
      // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
      if (response === 'undetermined') {
        Permissions.request('event').then(response => {
          // Returns once the user has chosen to 'allow' or to 'not allow' access
          // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
          this.setState({ eventPermission: response })
          if (response === 'authorized') {
            // Save the event to the calednar
            this.addEventToCalendar();
          } else {
            alert('Can\'t access calendar');
            // TODO: add a message to send the user to the settings page to approve the permissions
          }
        })
      } else if (response === 'authorized') {
        // Save the event to the calednar
        this.addEventToCalendar();
      } else {
        alert('Can\'t access calendar');
        // TODO: add a message to send the user to the settings page to approve the permissions
      }
    })
    // RNCalendarEvents.authorizationStatus()
    // .then(status => {
    //   // handle status
    //   console.log(status);
    // })
    // .catch(error => {
    //   console.log(error);
    // });

  }


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
          source={this.props.place.photo}
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
  },arrowStyle:{
    height: '5%',
    width: '5%',
    position:'absolute'
  },arrowStyleContainer:{
    alignItems: 'center',
  }
});

export default ShowPage;
