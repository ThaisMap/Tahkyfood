import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import Container from '../components/Layout/Container';
import ListItem from '../components/List/ListItem';
import Separator from '../components/List/Separator';

const OptionsList = () => {
  const renderItem = ({ item }) => <ListItem title={item.title} />;
  const options = useSelector(state => state as Array<any>);
  return (
    <Container alignItems="stretch">
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
