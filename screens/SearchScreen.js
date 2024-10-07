import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

const trendsData = {
    foryou: [
      { country: 'USA', trendName: '#SummerVibes', posts: 1000 },
      { country: 'UK', trendName: '#Football', posts: 500 },
      { country: 'Canada', trendName: '#MapleSyrup', posts: 300 },
      { country: 'India', trendName: '#Bollywood', posts: 700 },
      { country: 'Australia', trendName: '#AussieRules', posts: 400 },
    ],
    trending: [
      { country: 'India', trendName: '#Cricket', posts: 1500 },
      { country: 'Brazil', trendName: '#Carnival', posts: 2000 },
      { country: 'Japan', trendName: '#Anime', posts: 1200 },
      { country: 'Germany', trendName: '#Volkswagen', posts: 800 },
      { country: 'Italy', trendName: '#Pasta', posts: 900 },
    ],
    news: [
      { country: 'Germany', trendName: '#Elections', posts: 800 },
      { country: 'Japan', trendName: '#TechNews', posts: 600 },
      { country: 'USA', trendName: '#2024Elections', posts: 1500 },
      { country: 'UK', trendName: '#BrexitUpdates', posts: 1000 },
      { country: 'Canada', trendName: '#Wildfires', posts: 500 },
    ],
    sports: [
      { country: 'Spain', trendName: '#LaLiga', posts: 900 },
      { country: 'Italy', trendName: '#SerieA', posts: 750 },
      { country: 'USA', trendName: '#NBAFinals', posts: 2000 },
      { country: 'Australia', trendName: '#AFLGrandFinal', posts: 1100 },
      { country: 'Canada', trendName: '#NHLPlayoffs', posts: 1200 },
    ],
  };
  

const SearchScreen = () => {
  const [selectedTab, setSelectedTab] = useState("foryou"); // Default tab is 'For You'
  const [searchQuery, setSearchQuery] = useState("");

  const renderTrendsItem = ({ item }) => (
    <View style={styles.trendItem}>
      <Text style={styles.trendText}>{`Trends in ${item.country}`}</Text>
      <Text style={styles.trendNameText}>{item.trendName}</Text>
      <Text style={styles.trendText}>{`${item.posts} posts`}</Text>
    </View>
  );

  const tabs = ["ForYou", "Trending", "News", "Sports"];

  return (
    <View style={styles.container}>
      {/* Search Input */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      {/* Top Navigation */}
      <View style={styles.tabsContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tab,
              selectedTab === tab.toLowerCase() && styles.activeTab,
            ]}
            onPress={() => {
              setSelectedTab(tab.toLowerCase());
            }}
          >
            <Text style={styles.tabText}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Trends List */}
      <FlatList
        data={trendsData[selectedTab]}
        renderItem={renderTrendsItem}
        keyExtractor={(item) => item.trendName}
        contentContainerStyle={styles.trendsList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  searchInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 16,
  },
  tab: {
    padding: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#1DA1F2",
  },
  tabText: {
    fontSize: 16,
  },
  trendsList: {
    paddingBottom: 16,
  },
  trendItem: {
    padding: 10,
    paddingBottom: 25,
    paddingTop: 25,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  trendText: {
    fontSize: 14,
    color: "gray",
  },
  trendNameText: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default SearchScreen;
