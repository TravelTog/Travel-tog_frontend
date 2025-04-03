import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Pages/Auth/Login';
import Register from '../Pages/Auth/Register';
import Tabs from './Tab';
import { AuthContext } from '../context/AuthContext';
//Tabs - оснавная страница в которой вложен MainPage
const Stack = createStackNavigator();

const StackNavigator = () => {
  const authContext = useContext(AuthContext);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {authContext?.isLoggedIn ? (
        <Stack.Screen name="Tabs" component={Tabs} />

      ) : (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;