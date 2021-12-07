import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  CompositeNavigationProp,
  NavigatorScreenParams,
} from '@react-navigation/core';
import React from 'react';
import AccountScreen from './AccountScreen';
import HomeScreen from './HomeScreen';
import {RootStackNavigationProp} from './RootStack';

/**
 * 1. 하단 탭 단독으로 사용한다면 `type MainTabNavigationProp = BottomTabNavigationProp<MainTabParamList>;` 이 코드만으로도 충분하다.
 * 2. 만약 하단 탭에서 상위 RootStack의 DetailScreen에 접근하여면 NavigationProp들을 합쳐줘야 한다.
 */
type MainTabParamList = {
  Home: undefined;
  Account: undefined;
};

// 1.
// export type MainTabNavigationProp = BottomTabNavigationProp<MainTabParamList>;

// 2.
export type MainTabNavigationProp = CompositeNavigationProp<
  RootStackNavigationProp,
  BottomTabNavigationProp<MainTabParamList>
>;

// 추후 RootStack 내부 화면에서 navigation.navigate('MainTab', { screen: 'Account' })가 가능하게 해준다.
export type MainTabNavigationScreenParams =
  NavigatorScreenParams<MainTabParamList>;

const Tab = createBottomTabNavigator<MainTabParamList>();

function MainTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}

export default MainTab;
