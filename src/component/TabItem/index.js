import React from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../utils';
import {
  ICHome,
  ICHomeActive,
  ICLiked,
  ICLikedActive,
  ICFilter,
  ICFilterActive,
  ICRegion,
  ICRegionActive,
  ICProfile,
  ICProfileActive,
} from '../../assets';

export default function TabItem({label, onLongPress, onPress, isFocused}) {
  const Icon = () => {
    if (label === 'Home') {
      return isFocused ? <ICHomeActive /> : <ICHome />;
    }
    if (label === 'Likes') {
      return isFocused ? <ICLikedActive /> : <ICLiked />;
    }
    if (label === 'Filters') {
      return isFocused ? <ICFilterActive /> : <ICFilter />;
    }
    if (label === 'Region') {
      return isFocused ? <ICRegionActive /> : <ICRegion />;
    }
    if (label === 'Profile') {
      return isFocused ? <ICProfileActive /> : <ICProfile />;
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={isFocused ? styles.containerIsFocused : styles.container}>
      <Icon style={styles.icon} />
      {isFocused && <Text style={styles.text}>{label.toUpperCase()}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    paddingVertical: 9,
  },
  containerIsFocused: {
    alignContent: 'center',
    backgroundColor: colors.navBackground,
    borderRadius: 12,
    flexDirection: 'row',
    paddingVertical: 9,
    paddingHorizontal: 14,
  },
  text: {
    color: colors.navIcon,
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    alignItems: 'center',
    marginLeft: 15,
  },
});
