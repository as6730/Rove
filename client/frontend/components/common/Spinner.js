import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

const OurSpinner = ({ size,text }) => {
  return (
    <View style={styles.spinnerStyle}>
      <Spinner
        visible={true}
        color='#FE5D26'
        style={{marginBotton:100}}
        textContent={"Building Your Itinerary..."}
        textStyle={{color: '#FE5D26',
          fontFamily: 'Helvetica Neue',
          marginBottom:360}}
        overlayColor="#dddddd"/>
    </View>
  );
};

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 500,
  },
  textStyle:{
    color: '#FE5D26',
    fontSize: 20,
    marginBottom: 500,
  },
};

export { OurSpinner };
