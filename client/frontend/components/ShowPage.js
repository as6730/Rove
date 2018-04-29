import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Linking,
  Alert,
  Button,
  ScrollView,
} from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import RNCalendarEvents from 'react-native-calendar-events';
import Permissions from 'react-native-permissions'

// TODO: Import marker for lat and long that are being passed in

class ShowPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cal_auth: '',
      eventAdded: false,
    };

    this.submit = this.submit.bind(this);
  }

  addEventToCalendar() {
    RNCalendarEvents.findCalendars().then(response => {
      let calendarId = response[0].id;
      RNCalendarEvents.saveEvent(this.props.name, {
          calendarId: calendarId,
          startDate: '2018-04-29T19:26:00.000Z',
          endDate: '2018-04-29T20:26:00.000Z'
        });
    });
  }

  // parseDate() {
  //
  // }

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
            Alert.alert(
              'Access Calendar',
              'Can\'t access calendar. Please change settings. Settings > Privacy > Calendar',
              [
                {text: 'Go to Settings', onPress: () => {
                  Linking.canOpenURL('app-settings:').then(supported => {
                      if (!supported) {
                        console.log('Can\'t handle settings url');
                      } else {
                        return Linking.openURL('app-settings:');
                      }
                    }).catch(err => console.error('An error occurred', err));
                }}
              ],
              { cancelable: true }
            )
          }
        })
      } else if (response === 'authorized') {
        // Save the event to the calendar
        this.addEventToCalendar();
        this.setState({ eventAdded: true });
      } else {
        Alert.alert(
          'Access Calendar',
          'Can\'t access calendar. Please change settings. Settings > Privacy > Calendar',
          [
            {text: 'Go to Settings', onPress: () => {
              Linking.canOpenURL('app-settings:').then(supported => {
                  if (!supported) {
                    console.log('Can\'t handle settings url');
                  } else {
                    return Linking.openURL('app-settings:');
                  }
                }).catch(err => console.error('An error occurred', err));
            }}
          ],
          { cancelable: true }
        )
      }
    })
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
    let place = this.props.place;
    const markers = [{
      latitude: place.location.lat,
      longitude: place.location.lng,
      title: place.name
    }];

    return (
      <ScrollView style={styles.container}>
        <Image
          style={styles.image}
          source={place.photo}
          />
        <View style={styles.info}>
          <Text style={styles.title}>{place.name}</Text>
          {place.rating && <Text>Rating: {place.rating}</Text>}
          {place.formatted_address && <Text>Address: {place.formatted_address}</Text>}
          {place.formatted_phone_number && <Text>Phone Number: {place.formatted_phone_number}</Text>}
          {place.website && <Text>Website: {place.website}</Text>}
        </View>
        <View style = {styles.mapContainer}>
        <MapView
          region={
            {
              latitude: place.location.lat,
              longitude: place.location.lng,
              latitudeDelta: 0.00092,
              longitudeDelta: 0.00421,
            }
          }
          style={styles.map}
          >
          <Marker
            coordinate={{
              latitude: place.location.lat,
              longitude: place.location.lng}}
            title={place.name}
            description={place.formatted_address}
          />
          </MapView>
        </View>
        <View style={ {flex: 0.1, alignItems: 'center', justifyContent: 'center' }}>
        { this.state.eventAdded ?
            <Text style={{color: '#FE5D26', fontWeight: "600", fontSize: 16 }}>Added to Calendar</Text>
        :
          <Button onPress={() => this.submit()} title={"Add to Calendar"} color={'#FE5D26'}></Button>
        }
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  info: {
    flex: 0.3,
    justifyContent: 'space-between',
    padding: 25,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#FE5D26',
  },
  image: {
    flex: 0.2,
    height: 200,
    width: '100%',
  },
  mapContainer: {
    height: '60%'
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
