import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { useAppSelector } from '../hooks';
import Container from './Layout/Container';
import Loading from './Loading';

const Chosen = () => {
  const { pick, loading } = useAppSelector(state => state.persistedReducer);

  return (
    <Container>
      {loading ? <Loading /> : <Text style={styles.text}>{pick.title}</Text>}
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
