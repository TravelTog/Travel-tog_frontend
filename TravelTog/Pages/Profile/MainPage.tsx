import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../../context/AuthContext';

const Profile = () => {
  const authContext = useContext(AuthContext);

  return (
    <View>
      <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa reprehenderit debitis accusantium perferendis, quia velit ratione neque reiciendis alias cum ab in aspernatur ad architecto libero molestiae! Incidunt, maxime labore!</Text>
      <Text>Profile</Text>
      <Button title="Logout" onPress={authContext?.logout} />
    </View>
  );
};

export default Profile;