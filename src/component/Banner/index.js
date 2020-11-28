import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ICCheck} from '../../assets';

export default function Banner() {
  return (
    <LinearGradient
      colors={['#2BC5F1', '#7FE2FE']}
      style={styles.container}
      start={{x: 0.51, y: 0}}>
      <View style={styles.wrapperContent}>
        <ICCheck style={styles.icon} />
        <View style={styles.wrapperText}>
          <Text style={styles.text1}>Payment Safety</Text>
          <Text style={styles.text2}>Kindly only use our official card</Text>
        </View>
        <View style={styles.rectangle1}></View>
        <View style={styles.rectangle2}></View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {height: 90, borderRadius: 20, marginBottom: 30},
  icon: {marginVertical: 15, marginLeft: 16, marginRight: 12},
  wrapperContent: {flexDirection: 'row'},
  wrapperText: {justifyContent: 'center'},
  text1: {fontSize: 16, fontFamily: 'Poppins-Medium', color: 'white'},
  text2: {fontSize: 12, fontFamily: 'Poppins-Regular', color: 'white'},
  rectangle1: {
    height: 62,
    width: 68,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderBottomRightRadius: 20,
  },
  rectangle2: {
    height: 74,
    width: 82,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderBottomRightRadius: 20,
  },
});
