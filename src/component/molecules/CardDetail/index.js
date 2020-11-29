import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  DummyProfile2,
  DummyProfile3,
  ICBath,
  ICBed,
  ICKitchen,
  ICStar,
  ICStarActive,
} from '../../../assets';
import {Testimony} from '../../atoms';

export default function CardDetail() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapperContent}>
        <View>
          <Text style={styles.name}>Blue Fast</Text>
          <Text style={styles.type}>Umum</Text>
        </View>
        <View style={styles.star}>
          <ICStarActive />
          <ICStarActive />
          <ICStarActive />
          <ICStarActive />
          <ICStar />
        </View>
      </View>
      <Text style={styles.label}>Room Specs</Text>
      <View style={styles.wrapper}>
        <View style={styles.spec}>
          <View style={styles.wrapper}>
            <ICBed />
            <Text style={styles.textSpec}>3</Text>
          </View>
          <Text style={styles.desc}>Master Bed</Text>
        </View>
        <View style={styles.spec}>
          <View style={styles.wrapper}>
            <ICBath />
            <Text style={styles.textSpec}>2</Text>
          </View>
          <Text style={styles.desc}>Bathrooms</Text>
        </View>
        <View>
          <View style={styles.wrapper}>
            <ICKitchen />
            <Text style={styles.textSpec}>1</Text>
          </View>
          <Text style={styles.desc}>Kitchen</Text>
        </View>
      </View>
      <Text style={styles.label}>Happy Tenant</Text>
      <Testimony
        avatar={DummyProfile2}
        name="Masayoshi"
        desc="Cozy for Freelancer"
        rate="5/5"
      />
      <Testimony
        avatar={DummyProfile3}
        name="Aken Tell"
        desc="Feels like at home"
        rate="4/5"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 22,
    paddingTop: 22,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -42,
  },
  wrapperContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  star: {flexDirection: 'row', alignItems: 'center'},
  name: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    color: '#040507',
    marginBottom: 2,
  },
  type: {fontSize: 16, fontFamily: 'Poppins-Regular', color: '#A5A5A5'},
  label: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
    color: '#040507',
    marginVertical: 20,
  },
  wrapper: {flexDirection: 'row'},
  spec: {marginRight: 40},
  textSpec: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: '#040507',
    marginLeft: 8,
  },
});
