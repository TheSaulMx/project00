import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

interface TabBarIconProps {
  focused: boolean;
  iconSourceFocused: string;
  iconSourceUnfocused: string;
}

const TabBarIcon: React.FC<TabBarIconProps> = ({ focused, iconSourceFocused, iconSourceUnfocused }) => {
  const iconSource: string = focused ? iconSourceFocused : iconSourceUnfocused;

  return (
    <View>
      <Image style={styles.image} source={iconSource} />
    </View>
  );
};

export default TabBarIcon;

const styles = StyleSheet.create({
  image: {
    width: 28,
    height: 28,
  },
});
