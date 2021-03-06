import React from 'react';
import {StatusBar, StyleSheet, TextInput, View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ICSearch} from '../../assets';
import {Banner, HeaderInfo, MostPeopleGo} from '../../component/molecules';
import {colors} from '../../utils';

export default function Home({navigation}) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="transparent"
        />
        <HeaderInfo />
        <View style={{position: 'relative'}}>
          <TextInput placeholder="Find your next home" style={styles.input} />
          <ICSearch style={{position: 'absolute', right: 16, top: 18}} />
        </View>
        <Banner />
        <Text style={styles.label}>Most People Go</Text>
        <MostPeopleGo onPress={() => navigation.navigate('Details')} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.pageBackground,
    flex: 1,
    paddingHorizontal: 22,
    paddingTop: 25,
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
  label: {
    marginBottom: 16,
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    color: '#040507',
  },
});
