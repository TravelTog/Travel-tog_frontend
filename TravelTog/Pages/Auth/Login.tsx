import React, { useContext } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Tabs: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

interface Props {
  navigation: LoginScreenNavigationProp;
}

const Login = ({ navigation }: Props) => {
   const authContext = useContext(AuthContext);
 
   const handleLogin = () => {
      authContext?.login();
      navigation.navigate('Tabs'); // Просто переходим на вкладки
    };

   return (
     <View style={{marginTop: '50%'}}>
       <Text>Login</Text>
       <TextInput placeholder="Email" style={{ borderWidth: 1, marginBottom: 10 }} />
       <TextInput placeholder="Password" secureTextEntry style={{ borderWidth: 1, marginBottom: 10 }} />
       <Button title="Login" onPress={handleLogin} />
       <Button title="Register" onPress={() => navigation.navigate('Register')} />
     </View>
   );
 };

export default Login;