import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Routes } from './src/routes/Routes';

export default function App() {
  return (
    <>
      <StatusBar style="auto" translucent />
      <Routes />
    </>
  );
}
