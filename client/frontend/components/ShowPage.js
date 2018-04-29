import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Linking,
  Alert,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import RNCalendarEvents from 'react-native-calendar-events';
import Permissions from 'react-native-permissions';
import { Button } from './common';
import StarRating from 'react-native-star-rating';

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
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={place.photo}
          />
        <View style={styles.info}>
          <Text style={styles.title}>{place.name}</Text>
          {place.rating
            && <View style={{width: 70}}>
                  <StarRating
              disabled={false}
              maxStars={5}
              disabled={true}
              starSize={20}
              style={{width: 70}}
              rating={place.rating}
              fullStarColor={'#FE5D26'}
              /></View>}
          {place.formatted_address
            && <Text style={styles.body}>{place.formatted_address}</Text>}
          {place.formatted_phone_number
            && <Text style={styles.body} >{place.formatted_phone_number}</Text>}
          {place.website
            && <Text
                style = {styles.website}
                onPress={() => Linking.openURL(this.props.place.website)}>
                Website
                </Text>}
        </View>
        <View style = {styles.mapContainer}>
        <MapView
          provider={'google'}
          style = {styles.map}
          initialRegion={{
            latitude: this.props.place.location.lat,
            longitude: this.props.place.location.lng,
            latitudeDelta: 0.0020,
            longitudeDelta: 0.0100,
          }}>
          <Marker
            coordinate={{
              latitude: this.props.place.location.lat,
              longitude: this.props.place.location.lng
            }}
            pinColor={'#FF8300'}/>
            <View>
              { this.state.eventAdded ?
                <TouchableOpacity
                  style={styles.buttonStyle}>
                  <Text style={styles.textStyle}>Added to Calendar</Text>
                </TouchableOpacity>
                :
                <Button
                  style={styles.button}
                  onPress={()=> this.submit()}
                  children={"Add to Calendar"}>
                </Button>
              }
            </View>
          </MapView>
        </View>
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
    marginBottom: 10,
  },
  info: {
    padding: 25,
    height: '30%',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#FE5D26',
  },
  body: {
    marginTop: 5,
  },
  image: {
    height: '25%',
    width: '100%',
  },
  mapContainer: {
    height: '45%',
  },
  map: {
    height: '100%',
  },
  arrowStyle:{
    height: 20,
    width: 40,
    position:'absolute',
  },
  website: {
    color: '#FE5D26',
    marginBottom: 20,
    marginTop: 10,
  },
  button: {
    position: 'absolute',
  },
  buttonStyle: {
    alignSelf: 'center',
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FE5D26',
    height: 30,
    width: '40%',
    marginTop: 260,
  },
  textStyle: {
    alignSelf: 'center',
    paddingTop: 3,
    color: '#FE5D26',
    fontWeight: "600",
    fontSize: 16,
  }
});

export default ShowPage;
