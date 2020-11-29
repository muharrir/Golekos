import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DummyMost1, DummyMost2, DummyMost3, DummyMost4} from '../../../assets';
import {Border} from '../../atoms';

export default function MostPeopleGo({onPress}) {
  return (
    <View style={styles.page}>
      <Border
        photo={DummyMost1}
        name="Fukko Cozy"
        type="Wanita"
        amount="$55"
        duration="/month"
      />
      <Border
        onPress={onPress}
        photo={DummyMost2}
        name="Blue Fast"
        type="Umum"
        amount="$21"
        duration="/month"
      />
      <Border
        photo={DummyMost3}
        name="Jamaixa IIX"
        type="Pria"
        amount="$49"
        duration="/month"
      />
      <Border
        photo={DummyMost4}
        name="Yaka Past"
        type="Wanita"
        amount="$82"
        duration="/month"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },
});
