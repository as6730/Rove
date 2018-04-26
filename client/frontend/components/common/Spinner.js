import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const OurSpinner = ({ size, }) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator color='#FE5D26' size={size || 'large'} />
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
