import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Pages/ProfileLogin/Login';
import Register from '../Pages/ProfileLogin/Register';
import Tabs from './Tabs';
import { AuthContext } from '../context/AuthContext';

const Stack = createStackNavigator();

const StackNavigator = () => {
  const authContext = useContext(AuthContext);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {authContext?.isLoggedIn ? (
        <Stack.Screen name="MainPage" component={Tabs} />
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