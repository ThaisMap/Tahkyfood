import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import theme from '../../theme';
import opcoes from '../utils/Opcoes';

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Lista = () => {
  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ItemSeparatorComponent={() => (
          <View
            style={{ backgroundColor: theme.colors.vermelhoSuave, height: 1 }}
          />
        )}
        data={opcoes}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
    width: '100%',
    flex: 1,
  },
  item: {
    padding: 8,
    marginVertical: 4,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 14,
  },
});

export default Lista;
