import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './src/screens/Home';
import Clases from './src/screens/Clases';
import Notif from './src/screens/Notif';
import User from './src/screens/User';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Recuperar from './src/screens/Recuperar';

const Tabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const homeName = 'Home';
const clasesName = 'Clases'
const qrName = 'qr'
const notifName = 'Notificaciones'
const userName = 'User'

function MyTabs() {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === homeName) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === clasesName) {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === notifName) {
            iconName = focused ? 'bell' : 'bell-outline';
          } else if (route.name === userName) {
            iconName = focused ? 'account' : 'account-outline';
          }

          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#009BDE',
        tabBarInactiveTintColor: '#878787',
        tabBarStyle: {
          backgroundColor: '#1e1e1e',
          borderTopWidth: 0,
          elevation: 0,
          height: 60,
          borderWidth: 0.5,
          borderColor: '#cccccc',
          paddingBottom: 5,
        },
        tabBarIndicatorStyle: { 
          height: 2,
        },
      })}
    >
      <Tabs.Screen name={'Home'} component={Home} options={{ headerShown: false }} />
      <Tabs.Screen name={'Clases'} component={Clases} options={{ headerShown: false }} />
      <Tabs.Screen name={'Notif'} component={Notif} options={{ headerShown: false }} />
      <Tabs.Screen name={'User'} component={User} options={{ headerShown: false }} />
    </Tabs.Navigator>
  );
}

function Mavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
      <Stack.Screen name='Register' component={Register} options={{ headerShown: false }} />
      <Stack.Screen name='Recuperar' component={Recuperar} options={{ headerShown: false }} />
      <Stack.Screen name='MyTabs' component={MyTabs} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Mavigation />
    </NavigationContainer>
  );
}