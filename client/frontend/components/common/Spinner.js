import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';


const OurSpinner = ({ size,text }) => {
  return (
    <View style={styles.spinnerStyle}>
      <Text style={styles.textStyle}>{text}</Text>
      <Spinner
        visible={true}
        color='#FE5D26'
        overlayColor="#dddddd">
      </Spinner>
    </View>
  );
};

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },textStyle:{
    color: '#FE5D26',
    fontFamily:'helvetica neue',
    fontSize: 20,
    marginBottom: 100,
  }
};

      // <ActivityIndicator color='#FE5D26'size={size || 'large'} />
export { OurSpinner };
