import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  title: string;
}

const ListItem = ({ title }: Props) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  item: {
    padding: 8,
    marginVertical: 4,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 14,
  },
});
