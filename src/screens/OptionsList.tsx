import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import AddItem from '../components/AddItem';
import Container from '../components/Layout/Container';
import ListItem from '../components/List/ListItem';
import Separator from '../components/List/Separator';
import { RootState } from '../store';
import { Option } from '../types/option';

const OptionsList = () => {
  const renderItem = ({ item }) => <ListItem title={item.title} />;
  const options = useSelector<RootState>(
    state => state.options as Array<Option>,
  );
  return (
    <Container alignItems="stretch">
      <AddItem />
      <FlatList
        ItemSeparatorComponent={Separator}
        data={options}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </Container>
  );
};

export default OptionsList;
