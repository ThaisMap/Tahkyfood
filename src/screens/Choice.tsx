import React from 'react';
import Chosen from '../components/Chosen';
import Button from '../components/Button';
import Container from '../components/Layout/Container';
import { useAppDispatch } from '../hooks';
import { disableLoading, enableLoading, pickRandom } from '../store/options';

const Choice = () => {
  const dispatch = useAppDispatch();
  const handlePick = () => {
    dispatch(enableLoading());
    dispatch(pickRandom());
    setTimeout(() => {
      dispatch(disableLoading());
    }, 1500);
  };

  return (
    <Container>
      <Chosen />
      <Button
        accessibilityLabel="buttonChoose"
        onPress={handlePick}
        text="Escolher"
      />
    </Container>
  );
};

export default Choice;
