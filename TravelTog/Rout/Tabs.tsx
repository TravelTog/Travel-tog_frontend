import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import MainPage from '../Pages/MainPage';
import Bookmark from '../Pages/Bookmark/Mark';
import Messenger from '../Pages/Messenger/ChatList';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Bookmark') iconName = 'bookmark';
          else if (route.name === 'Messenger') iconName = 'chatbubbles';

          return <Ionicons name={'star'} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={MainPage} />
      <Tab.Screen name="Bookmark" component={Bookmark} />
      <Tab.Screen name="Messenger" component={Messenger} />
    </Tab.Navigator>
  );
};

export default Tabs;