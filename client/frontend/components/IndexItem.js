import React from 'react';
import {View} from 'react-native';
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
    console.log('Im Here');

    return (
      <Swiper
        horizontal={true}
        height={110}
        dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
        activeDot={<View style={{backgroundColor: '#FE5D26', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
        paginationStyle={{ bottom: 5, right: '85%'}}>
        <CardSection>
          <IndexButton
          onPress={() => this.pickMe(this.props.itinerary[0])}
          imgUrl={this.props.imgUrl}>
            {this.props.itinerary[0].name}
          </IndexButton>
        </CardSection>
        <CardSection>
          <IndexButton
            onPress={() => this.pickMe(this.props.itinerary[1])}
            imgUrl={this.props.imgUrl}>
              {this.props.itinerary[1].name}
          </IndexButton>
        </CardSection>
      </Swiper>
    )
  }
}

export default IndexItem;
