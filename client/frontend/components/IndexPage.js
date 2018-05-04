import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  ListView
  } from 'react-native';
import { Card, BigButton, CardSection, OurSpinner } from './common';
import IndexButton from './common/IndexButton';
import { connect } from "react-redux";
import Swiper from 'react-native-swiper';
import { fetchItinerary } from "../actions/ItineraryActions";
import IndexItem from './IndexItem';

class IndexPage extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchItinerary(this.props.itineraryParams);
  }


  render() {
    if (this.props.loading){
      return (
        <OurSpinner size="large"/>
      );
    }

    let PHOTO_LINKS = [
      require("../images/Food.jpg"),
      require("../images/Nightlife.jpg"),
      require("../images/Nature.jpg"),
      require("../images/Culture.jpg")
      ];
    let keys = [
      ["breakfast", "lunch", "dinner"],
      ["bars"],
      ["nature"],
      ["arts"]
    ];

    const places = [];

    const mapPlaces = (itinerary) => {
      itinerary.forEach( (place, idx) => {
        keys[idx].forEach( key => {
          if (Object.keys(itinerary[idx]).length === 0) { return; }

          // console.log(
          //   parseInt(itinerary[idx][String(key)][0].date_time.start.slice(0,1))
          // );
          // console.log(
          //   itinerary[idx][String(key)][0].date_time.start.split(':')[0]
          // );
          places.push(
            <IndexItem
              key={itinerary[idx][String(key)][0].date_time.start.split(':')[0]}
              itinerary={itinerary[idx][String(key)]}
              imgUrl={PHOTO_LINKS[idx]}
              index={idx}
              navigator = {this.props.navigator}/>
          );
        });
      });
    };

    mapPlaces(this.props.itinerary);

    places.sort(function(act1, act2) {
  	return act1.key - act2.key;
    });

    return (
      <ScrollView>
        <Card>
          <Image style={styles.image}
            transform={[{translateY: 400}, {translateX: "89%"}]}
            source={require('../images/map.png')}></Image>
          {places}
        </Card>
      </ScrollView>
    );
  }
}

const styles = {
  titleStyle: {
    color: '#FE5D26'
  }, spinnerStyle: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },image:{
      height: 200,
      width: 200,
      position:'absolute'
    }
};

const mapStateToProps = (state, ownProps) => {
console.log(state.itinerary);
  return {
    itinerary: state.itinerary,
    loading: state.loading.loading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchItinerary: (itineraryParams) => dispatch(fetchItinerary(itineraryParams))
});
//
export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
