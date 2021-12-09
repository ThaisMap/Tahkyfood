import React from 'react';
import { FlatList, Text } from 'react-native';
import { appVersion } from '../../utils/appVersion';
import AddItem from '../components/AddItem';
import Container from '../components/Layout/Container';
import ListItem from '../components/List/ListItem';
import Separator from '../components/List/Separator';
import { useAppSelector } from '../hooks';

const OptionsList = () => {
  const renderItem = ({ item }) => <ListItem item={item} />;
  const options = useAppSelector(state => state.persistedReducer.options);

  return (
    <Container alignItems="stretch">
      <AddItem />
      <FlatList
        ItemSeparatorComponent={Separator}
        data={options}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Text
        style={{
          width: '100%',
          textAlign: 'center',
        }}>{`Versão ${appVersion}`}</Text>
    </Container>
  );
};

export default OptionsList;
