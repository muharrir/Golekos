import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyProfile2, ICStarActive} from '../../../assets';

export default function Testimony({avatar, name, desc, rate}) {
  return (
    <View style={styles.container}>
      <Image source={avatar} style={styles.avatar} />
      <View style={styles.wrapperTestimony}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.desc}>{desc}</Text>
        </View>
        <View style={styles.wrapper}>
          <Text style={styles.rate}>{rate}</Text>
          <ICStarActive />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flexDirection: 'row', marginBottom: 16},
  wrapperTestimony: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  name: {fontSize: 16, fontFamily: 'Poppins-Medium', color: '#040507'},
  desc: {fontSize: 14, fontFamily: 'Poppins-Light', color: '#A5A5A5'},
  avatar: {height: 45, width: 45, borderRadius: 45 / 2, marginRight: 12},
  rate: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#040507',
    marginRight: 4,
    paddingTop: 4,
  },
});
