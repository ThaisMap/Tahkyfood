import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import theme from '../../../theme';
import { Option } from '../../types/option';
import { Feather } from '@expo/vector-icons';
import { useAppDispatch } from '../../hooks';
import { removeItem } from '../../store/options';
interface Props {
  item: Option;
}

const ListItem = ({ item }: Props) => {
  const dispatch = useAppDispatch();
  const handlePressed = () => {
    dispatch(removeItem(item.id));
  };

  return (
    <View style={styles.item} accessibilityLabel="oneListItem">
      <Text accessibilityLabel={`listItem${item.title}`} style={styles.title}>
        {item.title}
      </Text>
      <Pressable
        onPress={handlePressed}
        accessibilityLabel={`iconDelete${item.title}`}
        style={({ pressed }) => [
          {
            opacity: pressed ? 0.7 : 1,
          },
          styles.button,
        ]}>
        <Feather name="trash-2" size={16} color={theme.colors.primary} />
      </Pressable>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  item: {
    padding: 8,
    marginVertical: 4,
    flexDirection: 'row',
    marginHorizontal: 16,
  },
  title: {
    fontSize: 14,
    flex: 1,
  },
  button: {
    paddingVertical: 6,
    marginLeft: 4,
    alignItems: 'center',
    width: 40,
  },
});
