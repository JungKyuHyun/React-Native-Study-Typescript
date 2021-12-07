import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {MainTabNavigationProp} from './MainTab';

function HomeScreen() {
  const navigation = useNavigation<MainTabNavigationProp>();
  const onPress = () => {
    navigation.navigate('Detail', {id: 1});
  };
  return (
    <View>
      <Text>Home</Text>
      <Button title="Open Detail" onPress={onPress} />
    </View>
  );
}

export default HomeScreen;
