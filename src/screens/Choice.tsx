import React from 'react';
import Chosen from '../components/Chosen';
import Button from '../components/Button';
import Container from '../components/Layout/Container';
import { Option } from '../types/option';
import { useAppDispatch, useAppSelector } from '../hooks';
import { pickRandom } from '../store/options';

const Choice = () => {
  const chosen: Option = useAppSelector(state => state.persistedReducer.pick);
  const dispatch = useAppDispatch();
  const handlePick = () => {
    dispatch(pickRandom());
  };

  return (
    <Container>
      <Chosen text={chosen.title} />
      <Button onPress={handlePick} text="Escolher" />
    </Container>
  );
};

export default Choice;
