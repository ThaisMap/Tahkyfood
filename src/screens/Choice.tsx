import React, { useState } from 'react';
import Chosen from '../components/Chosen';
import Button from '../components/Button';
import Container from '../components/Layout/Container';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Option } from '../types/option';

const Choice = () => {
  const [chosen, setChosen] = useState('comida');
  const options: Array<Option> = useSelector<RootState>(
    state => state.options as Array<Option>,
  );

  const pickRandon = () => {
    var rand = Math.floor(Math.random() * options.length);
    setChosen(options[rand].title);
  };

  return (
    <Container>
      <Chosen text={chosen} />
      <Button onPress={pickRandon} text="Escolher" />
    </Container>
  );
};

export default Choice;
