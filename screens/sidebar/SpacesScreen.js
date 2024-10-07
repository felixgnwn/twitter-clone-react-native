import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SpacesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Spaces Page</Text>
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

export default SpacesScreen;