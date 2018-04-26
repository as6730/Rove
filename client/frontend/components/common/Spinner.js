import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import Spinner from 'react-native-spinkit';


const OurSpinner = ({ size, }) => {
  return (
    <View style={styles.spinnerStyle}>
      <Spinner
      isVisible={true}
      size={50}
      type={'Bounce'}
      color={'#FE5D26'}
      />
      // <ActivityIndicator color='#FE5D26'size={size || 'large'} />
    </View>
  );
};

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export { OurSpinner };
