import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyProfile, ICHamburger} from '../../assets';

export default function HeaderInfo() {
  return (
    <View style={styles.container}>
      <View style={styles.leftContent}>
        <View style={styles.wrapperIcon}>
          <ICHamburger />
        </View>
        <View>
          <Text style={styles.great}>Hello,</Text>
          <Text style={styles.name}>Shayna Far</Text>
        </View>
      </View>
      <Image source={DummyProfile} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  leftContent: {flexDirection: 'row'},
  wrapperIcon: {
    marginRight: 20,
    height: 24,
    width: 24,
    justifyContent: 'center',
    alignItems: 'center',
    top: 5,
  },
  great: {fontSize: 24, fontFamily: 'Poppins-Regular'},
  name: {fontSize: 24, fontFamily: 'Poppins-Bold'},
  image: {width: 60, height: 60, borderRadius: 60 / 2},
});
