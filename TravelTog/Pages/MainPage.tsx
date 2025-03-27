import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';

const MainPage = () => {
  const authContext = useContext(AuthContext);

  return (
    <View>
      <Text>Main Page</Text>
      <Button title="Logout" onPress={authContext?.logout} />
    </View>
  );
};

export default MainPage;