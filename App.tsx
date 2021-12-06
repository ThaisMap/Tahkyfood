import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Loading from './src/components/Loading';
import { Routes } from './src/routes/Routes';
import store, { persistor } from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<Loading />}>
        <StatusBar style="auto" translucent />
        <Routes />
      </PersistGate>
    </Provider>
  );
}
