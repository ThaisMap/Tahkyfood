import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Container from './Layout/Container';

interface Props {
  text: string;
}

const Chosen = ({ text }: Props) => {
  return (
    <Container>
      <Text style={styles.text}>{text}</Text>
    </Container>
  );
};

export default Chosen;

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    maxWidth: '80%',
    textAlign: 'center',
  },
});
