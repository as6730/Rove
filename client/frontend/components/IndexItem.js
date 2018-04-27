import React from 'react';
import Swiper from 'react-native-swiper';
import { Card, BigButton, CardSection, OurSpinner, IndexButton } from './common';


class IndexItem extends React.Component {
  constructor(props){
    super(props);
    this.pickMe = this.pickMe.bind(this);
  }

  pickMe(place){
    this.props.navigator.push({
      name: 'Show',
      passProps: {
          place
        },
    });
  }

  render(){
    return (
      <Swiper horizontal={true} height={110}>
        <CardSection id={1}>
          <IndexButton
          onPress={() => this.pickMe(ITINERARY[0]["breakfast"][0])}
          imgUrl={require("../images/Food.jpg")}>
            {ITINERARY[0]["breakfast"][0]["name"]}
          </IndexButton>
        </CardSection>
        <CardSection id={2}>
          <IndexButton
          onPress={() => this.pickMe(ITINERARY[0]["breakfast"][1])}
          imgUrl={require("../images/Food.jpg")}>
            {ITINERARY[0]["breakfast"][1]["name"]}
          </IndexButton>
        </CardSection>
      </Swiper>
    )
  }
}

export default IndexItem;
