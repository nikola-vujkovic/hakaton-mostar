import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import TabBarButton from './src/components/TabBarButton';
import Icons from './src/constants/Icons';

import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import InputScreen from './src/screens/InputScreen';
import MissionScreen from './src/screens/MissionScreen';
import LocationScreen from './src/screens/LocationScreen';
import RedeemScreen from './src/screens/RedeemScreen';

export default function App() {
  const Stack = createStackNavigator();

  const TabArr = [
    

    {
      route: 'Redeem',
      name: 'Redeem',
      type: Icons.Ionicons,
      activeIcon: 'gift',
      inactiveIcon: 'gift-outline',
      component: RedeemScreen,
    },

    {
      route: 'Home',
      name: 'Home',
      type: Icons.MaterialCommunityIcons,
      activeIcon: 'home-city',
      inactiveIcon: 'home-city-outline',
      component: ProfileScreen,
    },

    {
      route: 'Mission',
      name: 'Mission',
      type: Icons.MaterialCommunityIcons,
      activeIcon: 'medal',
      inactiveIcon: 'medal-outline',
      component: MissionScreen,
    },
  ];

  const Tab = createBottomTabNavigator();
  const TabNavigator = () => (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#CEF0ED',
          height: 60,
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
        },
      }}>
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            options={{
              tabBarShowLabel: false,
              tabBarButton: props => <TabBarButton {...props} item={item} />,
            }}
            name={item.route}
            component={item.component}
          />
        );
      })}
    </Tab.Navigator>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Input" component={InputScreen} />
        <Stack.Screen name="Location" component={LocationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
