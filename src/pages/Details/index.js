import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {DummyDetails, ICBack, ICLove} from '../../assets';
import {Bottom} from '../../component/atoms';
import {CardDetail} from '../../component/molecules';

export default function Details({navigation}) {
  return (
    <View style={styles.page}>
      <ImageBackground source={DummyDetails} style={styles.image}>
        <View style={styles.icon}>
          <View style={styles.wrapperIcon}>
            <ICBack onPress={() => navigation.goBack()} />
          </View>
          <View style={styles.wrapperIcon}>
            <ICLove />
          </View>
        </View>
      </ImageBackground>
      <CardDetail />
      <Bottom price="$1,355" duration="/month" label="Booking Now" />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {flex: 1},
  image: {height: 360},
  icon: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapperIcon: {
    backgroundColor: 'white',
    height: 38,
    width: 38,
    borderRadius: 38 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 22,
  },
});
