import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Escolha from '../screens/Escolha';
import Lista from '../screens/Lista';
import { FontAwesome5 } from '@expo/vector-icons';
import theme from '../../theme';

type BottomTabsParams = {
  Lista: undefined;
  Escolha: undefined;
};

type TabsNavigationProps = BottomTabScreenProps<BottomTabsParams, 'Lista'>;

const { Navigator, Screen } = createBottomTabNavigator();

function Routes() {
  return (
    <NavigationContainer theme={theme}>
      <SafeAreaProvider>
        <Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              paddingBottom: 9,
              paddingTop: 12,
              height: 62,
            },
          }}>
          <Screen
            name="Lista"
            component={Lista}
            options={{
              tabBarLabel: 'Lista',
              tabBarIcon: ({ color }) => (
                <FontAwesome5 name="list-alt" size={24} color={color} />
              ),
            }}
          />
          <Screen
            name="Escolha"
            component={Escolha}
            options={{
              tabBarLabel: 'Escolha',
              tabBarIcon: ({ color }) => (
                <FontAwesome5 name="random" size={24} color={color} />
              ),
            }}
          />
        </Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export { Routes, TabsNavigationProps };
