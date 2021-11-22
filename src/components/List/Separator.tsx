import React from 'react';
import { View } from 'react-native';
import theme from '../../../theme';

const Separator = () => {
  return <View style={{ backgroundColor: theme.colors.border, height: 1 }} />;
};

export default Separator;
