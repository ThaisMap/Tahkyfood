import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import theme from '../../theme';
import opcoes from '../utils/Opcoes';
import Escolhido from '../components/Escolhido';

const Escolha = () => {
  const [escolhido, setEscolhido] = useState('comida');

  const pickRandon = () => {
    var rand = Math.floor(Math.random() * opcoes.length);
    setEscolhido(opcoes[rand].title);
  };

  return (
    <View style={styles.container}>
      <View style={styles.escolhido}>
        <Escolhido texto={escolhido} />
      </View>
      <Pressable onPress={pickRandon} style={styles.botao}>
        <Text style={styles.texto}>Escolher</Text>
      </Pressable>
    </View>
  );
};

export default Escolha;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  escolhido: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    backgroundColor: theme.colors.vermelhoSuave,
    padding: 12,
    borderRadius: 8,
    margin: 8,
    width: 150,
    alignItems: 'center',
  },
  texto: {
    color: theme.colors.rosaBackground,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
