import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import DrawerRoutes from './components/Source/Routes/drawer.routes';

export default function App() {

  // CONTADOR DE CLIQUES

  const [linkClicks, setLinkClicks] = useState(0);

  return (

    <NavigationContainer>

      <DrawerRoutes
        linkClicks={linkClicks}
        setLinkClicks={setLinkClicks}
      />

    </NavigationContainer>

  );
}