import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from '../Rout/StackNavigator';
import { AuthProvider } from '../context/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <StackNavigator />
    </AuthProvider>
  );
}