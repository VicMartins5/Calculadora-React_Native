import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Calculadora from "./Telas/Calculadora";
import Conversor from "./Telas/Conversor";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator screenOptions={{headerShown: false}} headerMode="none" initialRouteName="Conversor">
        <Stack.Screen name="Calculadora" component={Calculadora} />
        <Stack.Screen name="Conversor" component={Conversor} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}