import {RouteProp} from '@react-navigation/core';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React from 'react';
import DetailScreen from './DetailScreen';
import MainTab, {MainTabNavigationScreenParams} from './MainTab';

type RootStackParamList = {
  MainTab: MainTabNavigationScreenParams;
  Detail: {
    id: number;
  };
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

export type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}

export default RootStack;
