import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MonetizationScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Monetization Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MonetizationScreen;