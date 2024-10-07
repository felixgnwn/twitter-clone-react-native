import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import TweetCard from "../components/TweetCard";

const HomeScreen = () => {
  const [selectedTab, setSelectedTab] = useState("forYou");

  // Contoh data untuk tweet
  const tweetsData = {
    forYou: [
      {
        id: 1,
        profileImage: require("../assets/profile-pic.webp"),
        username: "User1",
        timeTweeted: "2h",
        caption: "Ini adalah tweet dari For You!",
        image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg", // Gambar tweet
      },
      {
        id: 2,
        profileImage: require("../assets/profile-pic.webp"),
        username: "User2",
        timeTweeted: "3h",
        caption: "Selamat datang di halaman For You!",
        image: null, // Tanpa gambar
      },
      {
        id: 3,
        profileImage: require("../assets/profile-pic.webp"),
        username: "User3",
        timeTweeted: "5h",
        caption: "Cek gambar ini!",
        image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg", // Gambar tweet
      },
      {
        id: 4,
        profileImage: require("../assets/profile-pic.webp"),
        username: "User4",
        timeTweeted: "1d",
        caption: "Menikmati tweet dari For You!",
        image: null, // Tanpa gambar
      },
      {
        id: 5,
        profileImage: require("../assets/profile-pic.webp"),
        username: "User5",
        timeTweeted: "1d",
        caption: "Ada yang baru dari For You!",
        image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg", // Gambar tweet
      },
    ],
    following: [
      {
        id: 1,
        profileImage: require("../assets/profile-pic.webp"),
        username: "User6",
        timeTweeted: "5h",
        caption: "Tweet dari Following!",
        image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg", // Gambar tweet
      },
      {
        id: 2,
        profileImage: require("../assets/profile-pic.webp"),
        username: "User7",
        timeTweeted: "1d",
        caption: "Menikmati tweet dari Following!",
        image: null, // Tanpa gambar
      },
      {
        id: 3,
        profileImage: require("../assets/profile-pic.webp"),
        username: "User8",
        timeTweeted: "2d",
        caption: "Cek tweet ini dari Following!",
        image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg", // Gambar tweet
      },
      {
        id: 4,
        profileImage: require("../assets/profile-pic.webp"),
        username: "User9",
        timeTweeted: "3d",
        caption: "Halo semua!",
        image: null, // Tanpa gambar
      },
      {
        id: 5,
        profileImage: require("../assets/profile-pic.webp"),
        username: "User10",
        timeTweeted: "4d",
        caption: "Ada update baru dari Following!",
        image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg", // Gambar tweet
      },
    ],
  };
  

  return (
    <View style={styles.container}>
      {/* Navigasi Atas */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === "forYou" && styles.activeTab,
          ]}
          onPress={() => setSelectedTab("forYou")}
        >
          <Text style={styles.tabText}>For You</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === "following" && styles.activeTab,
          ]}
          onPress={() => setSelectedTab("following")}
        >
          <Text style={styles.tabText}>Following</Text>
        </TouchableOpacity>
      </View>

      {/* Konten Tweet */}
      <ScrollView>
        {tweetsData[selectedTab].map((tweet) => (
          <TweetCard
            key={tweet.id}
            profileImage={tweet.profileImage}
            username={tweet.username}
            timeTweeted={tweet.timeTweeted}
            caption={tweet.caption}
            image={tweet.image}
          />
        ))}
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
    marginBottom: 16,
  },
  tabButton: {
    padding: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#1DA1F2",
  },
  tabText: {
    fontSize: 16,
  },
});

export default HomeScreen;
