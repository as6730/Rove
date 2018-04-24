import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import MapView from 'react-native-maps';


class ShowPage extends React.Component {
  render() {

    return (
      <View style = {styles.container}>
        <View style = {styles.info}>
          <View>
            <Text style = {styles.title} >Good Food</Text>
            <Text>2343 Battery St.</Text>
            <Text>San Francisco, CA 98437</Text>
            <Text>(555)-555-5555</Text>
          </View>
          <View>
          <Image style = {styles.image}/>
          </View>
        </View>
        <View>
          <Text>Description</Text>
          <MapView
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
    // flexDirection: 'row',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 25,
    borderBottomWidth: 4,
  },
  image: {
    height: 100,
    width: 100,
  },
  map: {
    height: 350,
  },
});

export default ShowPage;
