import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

const NotificationsScreen = () => {
  const [selectedTab, setSelectedTab] = useState("All");

  const renderContent = () => (
    <View style={styles.content}>
      <Text style={styles.title}>Join the Conversation</Text>
      <Text style={styles.description}>
        From reposts to likes and a whole lot more, this is where all the action
        happens about your posts and followers. You'll like it here.
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Top Navigation */}
      <View style={styles.tabContainer}>
        {["All", "Verified", "Mentions"].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tabButton, selectedTab === tab && styles.activeTab]}
            onPress={() => setSelectedTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Content Section */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {renderContent()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: "blue",
  },
  tabText: {
    fontSize: 16,
    color: "gray",
  },
  activeTabText: {
    color: "blue",
    fontWeight: "bold",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "gray",
  },
});

export default NotificationsScreen;
