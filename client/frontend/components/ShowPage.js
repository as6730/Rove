import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';

// TODO: Import marker for lat and long that are being passed in


class ShowPage extends React.Component {
  render() {

    const marker = {
      latitude: 37.773972,
      longitude: -122.431297,
    };

    return (
      <View style = {styles.container}>
        <View style = {styles.info}>
          <View style = {styles.contactInfo}>
            <Text style = {styles.title} >Good Food</Text>
            <Text>2343 Battery St.</Text>
            <Text>San Francisco, CA 98437</Text>
            <Text>(555)-555-5555</Text>
          </View>
          <View>
            <Image
              style = {styles.image}
              source={{ uri: `https://duranvirginia.files.wordpress.com/2014/02/virginia-duran-blog-10-sites-to-take-the-best-skyline-pictures-in-san-francisco-mandarin-oriental-at-dusk.jpg`}}
              />
          </View>
          <View style = {styles.description}>
            <Text>Description: kwjeaio akjeoi sadkvn ksdj oiean kadk eisndk kajivr mnsalir mnci keaji knse kncoijaes klja klajwe  aknk ai lkna sei</Text>
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

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    flex: 1,
    height: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: 25,
    height: '50%',
  },
  image: {
    height: 100,
    width: 100,
  },
  description: {
    marginTop: 25,
    height: '50%',
    justifyContent: 'space-between',
  },
  mapContainer: {
    height: '50%',
  },
  map: {
    height: '100%',
  },
});

export default ShowPage;
