import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import StackRoutes from './stack.routes';
import SettingsScreen from '../Screens/SettingScreen';
import ProfileScreen from '../Screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function TabRoutes(props) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Inicio') {
            iconName = 'home';
          } else if (route.name === 'Perfil') {
            iconName = 'person';
          } else if (route.name === 'Links Uteis') {
            iconName = 'create-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Inicio" component={StackRoutes} />

      <Tab.Screen name="Perfil" >
        {() => <ProfileScreen linkClicks={props.linkClicks} />}
      </Tab.Screen>

      <Tab.Screen name="Links Úteis">
        {() => (
          <SettingsScreen
            linkClicks={props.linkClicks}
            setLinkClicks={props.setLinkClicks}
          />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
