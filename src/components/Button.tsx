import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import theme from '../../theme';

interface Props {
  onPress: () => void;
  text: string;
  accessibilityLabel: string;
}

const Button = ({ onPress, text, accessibilityLabel }: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={styles.button}
      accessibilityLabel={accessibilityLabel}>
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
