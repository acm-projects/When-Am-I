import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { color } from 'react-native-reanimated';

const Event= () => (
    <View style={styles.container}>
      <Text>Event!</Text>
      <StatusBar style="auto" />
    </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#30475E',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Event;