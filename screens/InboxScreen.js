import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const InboxScreen = () => {
  return (
    <View style={styles.container}>
      {/* Search Input */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search Direct Messages"
      />

      {/* Centered Content */}
      <View style={styles.centeredContent}>
        {/* Welcome Message */}
        <Text style={styles.welcomeText}>
          Welcome to your inbox!
        </Text>
        <Text style={styles.infoText}>
          Drop a line, share posts and more with private conversations between you and others on X.
        </Text>

        {/* Write a Message Button */}
        <TouchableOpacity style={styles.buttonContainer} onPress={() => {}}>
          <Text style={styles.buttonText}>Write a Message</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  searchInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 16,
    width: '100%',
  },
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 8,
    textAlign: 'center',
  },
  infoText: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 10,
    backgroundColor: 'black',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default InboxScreen;