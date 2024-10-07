import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PremiumScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Premium Page</Text>
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

export default PremiumScreen;