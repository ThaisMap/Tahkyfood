import React, { useState } from 'react';
import opcoes from '../utils/Opcoes';
import Chosen from '../components/Chosen';
import Button from '../components/Button';
import Container from '../components/Layout/Container';

const Choice = () => {
  const [chosen, setChosen] = useState('comida');

  const pickRandon = () => {
    var rand = Math.floor(Math.random() * opcoes.length);
    setChosen(opcoes[rand].title);
  };

  return (
    <Container>
      <Chosen text={chosen} />
      <Button onPress={pickRandon} text="Escolher" />
    </Container>
  );
};

export default Choice;
