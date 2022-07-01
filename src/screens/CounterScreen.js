import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  // const [baseVal ,setBaseval] = useState(0);

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          // Don't do this!
          // counter++;
          // counter = counter + 1;
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      <Text>Current Count: {counter}</Text>
      <Button
        title="Reset"
        onPress={() => {
          setCounter(0);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
