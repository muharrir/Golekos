import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {ICSearch} from '../../assets';
import HeaderInfo from '../../component/HeaderInfo';
import {colors} from '../../utils';

export default function Home() {
  return (
    <View style={styles.page}>
      <HeaderInfo />
      <View style={{position: 'relative'}}>
        <TextInput placeholder="Find your next home" style={styles.input} />
        <ICSearch style={{position: 'absolute', right: 16, top: 18}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.pageBackground,
    flex: 1,
    paddingHorizontal: 22,
  },
  input: {
    backgroundColor: 'white',
    padding: 16,
    paddingRight: 40,
    fontSize: 16,
    fontFamily: 'Poppins-Light',
    borderRadius: 11,
    marginBottom: 30,
  },
});
