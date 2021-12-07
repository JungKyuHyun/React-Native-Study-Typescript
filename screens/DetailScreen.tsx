import {useRoute} from '@react-navigation/core';
import React from 'react';
import {Text, View} from 'react-native';
import {DetailScreenRouteProp} from './RootStack';

function DetailScreen() {
  const {params} = useRoute<DetailScreenRouteProp>();

  return (
    <View>
      <Text>Detail {params.id}</Text>
    </View>
  );
}

export default DetailScreen;
