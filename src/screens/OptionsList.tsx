import React from 'react';
import { FlatList } from 'react-native';
import Container from '../components/Layout/Container';
import ListItem from '../components/List/ListItem';
import Separator from '../components/List/Separator';
import opcoes from '../utils/Opcoes';

const OptionsList = () => {
  const renderItem = ({ item }) => <ListItem title={item.title} />;

  return (
    <Container alignItems="stretch">
      <FlatList
        ItemSeparatorComponent={Separator}
        data={opcoes}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </Container>
  );
};

export default OptionsList;
