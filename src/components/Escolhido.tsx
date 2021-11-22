import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  texto: string;
}

const Escolhido = ({texto}: Props) => {
  return (
    <View>
      <Text style={styles.texto}>{texto}</Text>
    </View>
  );
};

export default Escolhido;

const styles = StyleSheet.create({
  texto: {
    fontSize: 32,
    maxWidth: '80%',
    textAlign: 'center',
  },
});
