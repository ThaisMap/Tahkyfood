import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import theme from '../../theme';
import { useAppDispatch, useAppSelector } from '../hooks';
import { addItem } from '../store/options';

const AddItem = () => {
  const [itemName, setItemName] = useState('');
  const options = useAppSelector(state => state.persistedReducer.options);
  const dispatch = useAppDispatch();
  const isDisabled =
    !itemName.length ||
    options.some(
      option => option.title.toLowerCase() === itemName.toLowerCase().trim(),
    );
  const handlePressed = () => {
    dispatch(addItem(itemName.trim()));
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={itemName}
        onChangeText={setItemName}
        style={styles.input}
      />
      <Pressable
        onPress={handlePressed}
        disabled={isDisabled}
        style={({ pressed }) => [
          {
            opacity: pressed ? 0.7 : 1,
          },
          {
            backgroundColor: isDisabled
              ? theme.colors.rosaMedio
              : theme.colors.primary,
          },
          styles.button,
        ]}>
        <Text style={styles.text}>+</Text>
      </Pressable>
    </View>
  );
};

export default AddItem;

const styles = StyleSheet.create({
  container: {
    padding: 4,
    marginVertical: 16,
    marginLeft: 8,
    marginRight: 16,
    borderBottomColor: theme.colors.border,
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  input: {
    fontSize: 18,
    flex: 9,
    marginHorizontal: 8,
  },
  button: {
    flex: 1,
    padding: 4,
    marginHorizontal: 4,
    borderRadius: 8,
    alignItems: 'center',
  },
  text: {
    color: theme.colors.background,
  },
});
