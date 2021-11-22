import React, { ReactNode } from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ViewStyle,
  FlexAlignType,
} from 'react-native';

interface Props {
  style?: ViewStyle;
  children: ReactNode;
  alignItems?: FlexAlignType;
}

const Container = ({ style, children, alignItems = 'center' }: Props) => {
  return (
    <SafeAreaView style={[styles.container, { alignItems }, style]}>
      {children}
    </SafeAreaView>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
});
