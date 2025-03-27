import React, { useContext } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { AuthContext } from '../../context/AuthContext';

const Login = ({ navigation }) => {
  const authContext = useContext(AuthContext);

  const handleLogin = () => {
    authContext?.login();
  };

  return (
    <View>
      <Text>Login</Text>
      <TextInput placeholder="Email" style={{ borderWidth: 1, marginBottom: 10 }} />
      <TextInput placeholder="Password" secureTextEntry style={{ borderWidth: 1, marginBottom: 10 }} />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Register" onPress={() => navigation.navigate('Register')} />
    </View>
  );
};

export default Login;