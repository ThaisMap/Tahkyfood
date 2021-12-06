import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import theme from '../../theme';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={50} color={theme.colors.primary} />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
