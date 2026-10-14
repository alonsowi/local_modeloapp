import 'react-native-gesture-handler';
import DrawerNavigator from '@/navigation/DrawerNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { registerRootComponent } from 'expo';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  </GestureHandlerRootView>
);

registerRootComponent(App);
