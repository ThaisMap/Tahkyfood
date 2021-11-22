import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import theme from '../../theme';

interface Props {
  onPress: () => void;
  text: string;
}

const Button = ({ onPress, text }: Props) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    padding: 12,
    borderRadius: 8,
    margin: 8,
    width: 150,
    alignItems: 'center',
  },
  text: {
    color: theme.colors.background,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
