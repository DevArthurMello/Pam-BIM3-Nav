    import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import TabRoutes from './tabs.routes';
import ProfileScreen from '../Screens/ProfileScreen'
import SettingsScreen from '../Screens/SettingScreen'

const Drawer = createDrawerNavigator();

export default function DrawerRoutes(props) {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Inicio">
        {() => <TabRoutes {...props} />}
      </Drawer.Screen>

      <Drawer.Screen name="Perfil"
        component={ProfileScreen}
      />
        
      <Drawer.Screen name="Links Uteis"
        component={() => <ProfileScreen linkClicks={props.linkClicks} />}
      />
        

    </Drawer.Navigator>
  );
}
