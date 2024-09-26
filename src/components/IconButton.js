import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';  

const IconButton = ({ name, size = 30, color = 'black', onPress, style }) => {
  return (
    <Pressable style={[styles.backIcon, style]} onPress={onPress}>
      <Icon name={name} size={size} color={color} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  backIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default IconButton;
