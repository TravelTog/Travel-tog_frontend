import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import MainPage from '../Pages/Profile/MainPage';
import Bookmark from '../Pages/Bookmark/Mark';
import Messenger from '../Pages/Messenger/ChatList';
import SearchList from '../Pages/Search/SearchList';
import TripsList from '../Pages/Trips/TripsList';
import { Ionicons, AntDesign, Feather, FontAwesome6 } from '@expo/vector-icons';

import LocationIcon from '../assets/icons/Location.svg';
import BookmarkIcon from '../assets/icons/Bookmark.svg';
import ChatIcon from '../assets/icons/Chat.svg';
import SearchIcon from '../assets/icons/Search.svg';
import ProfileIcon from '../assets/icons/Profile.svg';

//Tabs - оснавная страница в которой вложен MainPage
const Tab = createBottomTabNavigator();


const Tabs = () => {
  // const iconMap = {
  //   'Закладки': BookmarkIcon,
  //   'Поездки': LocationIcon,
  //   ' ': SearchIcon,
  //   'Чат': ChatIcon,
  //   'Профиль': ProfileIcon,
  // };

  //----tab.screen - нижнии кнопки перехода на страницу
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          // const IconComponent = iconMap[route.name];
          // if (!IconComponent) return null; //iconMap не содержит страницы

          if (route.name === ' ') {
            return (
              <View style={styles.searchButton}>
                <AntDesign name="search1" size={24} color="white" />
                {/* <IconComponent width={size} height={size} fill={'#0066FF'} /> */}
              </View>
            );
          }
          // ----svg не изменяет цвет поэтому иконки взяты стандартные expo похожие
          if (route.name === 'Закладки') { return (<Ionicons name="bookmark-outline" size={24} color={color} focused={focused} />);}
          if (route.name === 'Чат') { return (<AntDesign name="message1" size={24} color={color} focused={focused} />);}
          if (route.name === 'Профиль') { return (<FontAwesome6 name="user" size={24} color={color} focused={focused} />);}
          if (route.name === 'Поездки') { return (<Feather name="map-pin" size={24} color={color} focused={focused} />);}

          // return <IconComponent width={size} height={size} stroke={color} fill={'#fff'} backgroundColor={'blue'} />;
        },
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#0066FF', //-- Цвет текста при выборе
        tabBarInactiveTintColor: '#A0A0A0', //-- Цвет текста без выбора
        headerShown: false,//--отключение верхнего колонтитула
        // tabBarShowLabel: false, //--отключение label
      })}
    >
      <Tab.Screen name="Закладки" component={Bookmark} />
      <Tab.Screen name="Поездки" component={TripsList} />
      <Tab.Screen name=" " component={SearchList}/>
      <Tab.Screen name="Чат" component={Messenger} />
      <Tab.Screen name="Профиль" component={MainPage} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 120,
    paddingTop: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  searchButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#0066FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Tabs;