import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils';

export default function Bottom({price, duration, label}) {
  return (
    <View style={styles.container}>
      <View style={styles.price}>
        <Text style={styles.textPrice}>{price}</Text>
        <Text style={styles.textDuration}>{duration}</Text>
      </View>
      <View style={styles.order}>
        <Text style={styles.proccess}>{label.toUpperCase()}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  price: {
    backgroundColor: 'white',
    paddingHorizontal: 25,
    paddingTop: 17,
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  order: {
    backgroundColor: colors.checkout,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textPrice: {
    fontSize: 24,
    fontFamily: 'Poppins-Medium',
    color: '#040507',
    textAlign: 'center',
  },
  textDuration: {
    fontSize: 16,
    fontFamily: 'Poppins-Light',
    color: '#A5A5A5',
    textAlign: 'center',
  },
  proccess: {fontSize: 24, fontFamily: 'Poppins-SemiBold', color: 'white'},
});
