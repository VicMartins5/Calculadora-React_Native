import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Calculadora from "./Telas/Calculadora";
import Medidas from "./Telas/Medidas";
import Peso from "./Telas/Peso";
import Temperatura from "./Telas/Temperatura";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator screenOptions={{headerShown: false}} headerMode="none" initialRouteName="Calculadora">
        <Stack.Screen name="Calculadora" component={Calculadora} />
        <Stack.Screen name="Medidas" component={Medidas} />
        <Stack.Screen name="Peso" component={Peso} />
        <Stack.Screen name="Temperatura" component={Temperatura} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}