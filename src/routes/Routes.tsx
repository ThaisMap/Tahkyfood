import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Choice from '../screens/Choice';
import OptionsList from '../screens/OptionsList';
import { FontAwesome5 } from '@expo/vector-icons';
import theme from '../../theme';
import Container from '../components/Layout/Container';
import { StatusBar } from 'react-native';

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
        <Container
          alignItems="stretch"
          style={{
            paddingTop: StatusBar.currentHeight || 0,
          }}>
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
              component={OptionsList}
              options={{
                tabBarLabel: 'Lista',
                tabBarAccessibilityLabel: 'tabBarLista',
                tabBarIcon: ({ color }) => (
                  <FontAwesome5 name="list-alt" size={24} color={color} />
                ),
              }}
            />
            <Screen
              name="Escolha"
              component={Choice}
              options={{
                tabBarLabel: 'Escolha',
                tabBarAccessibilityLabel: 'tabBarEscolha',
                tabBarIcon: ({ color }) => (
                  <FontAwesome5 name="random" size={24} color={color} />
                ),
              }}
            />
          </Navigator>
        </Container>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export { Routes, TabsNavigationProps };
