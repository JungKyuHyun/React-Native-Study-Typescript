import React, {useReducer} from 'react';
import {Button, Text, View} from 'react-native';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 1,
};

type CounterAction = {type: 'increment'} | {type: 'decrement'; by: number};

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case 'increment':
      return {
        value: state.value + 1,
      };
    case 'decrement':
      return {
        value: state.value - action.by,
      };
    default:
      throw new Error('Unhandled action type');
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <View>
      <Text></Text>
      <Button title="+1" onPress={() => dispatch({type: 'increment'})} />
      <Button title="-1" onPress={() => dispatch({type: 'decrement', by: 1})} />
    </View>
  );
}

export default Counter;
