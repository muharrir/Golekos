import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default function Border({name, type, amount, duration, photo}) {
  return (
    <View style={styles.content}>
      <Image source={photo} style={styles.image} />
      <View style={styles.wrapperText}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.type}>{type}</Text>
        </View>
        <View>
          <Text style={styles.amount}>{amount}</Text>
          <Text style={styles.duration}>{duration}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F4F6FA',
  },
  image: {height: 60, width: 60, borderRadius: 15, marginRight: 16},
  wrapperText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  name: {fontSize: 16, fontFamily: 'Poppins-Medium', color: '#040507'},
  type: {fontSize: 12, fontFamily: 'Poppins-Light', color: '#A5A5A5'},
  amount: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#040507',
    textAlign: 'right',
  },
  duration: {
    fontSize: 12,
    fontFamily: 'Poppins-Light',
    color: '#A5A5A5',
    textAlign: 'right',
  },
});
