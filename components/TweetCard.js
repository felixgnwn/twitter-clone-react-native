import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const TweetCard = ({ profileImage, username, timeTweeted, caption, image }) => {
  const [liked, setLiked] = useState(false);
  const [retweeted, setRetweeted] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const [likeCount, setLikeCount] = useState(0);
  const [retweetCount, setRetweetCount] = useState(0);
  const [replyCount] = useState(0);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  const handleRetweet = () => {
    setRetweeted(!retweeted);
    setRetweetCount(retweeted ? retweetCount - 1 : retweetCount + 1);
  };

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <View style={styles.card}>
      {/* Profile Picture */}
      <Image source={profileImage} style={styles.profileImage} />

      {/* Tweet Content */}
      <View style={styles.tweetContent}>
        {/* Username and Time */}
        <View style={styles.header}>
          <Text style={styles.username}>{username}</Text>
          <Text style={styles.timeTweeted}>{timeTweeted}</Text>
        </View>

        {/* Caption */}
        <Text style={styles.caption}>{caption}</Text>
        {image && <Image source={{ uri: image }} style={styles.tweetImage} />}

        {/* Action Buttons */}
        <View style={styles.actions}>
          {/* Reply Button */}
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="chatbubble-outline" size={20} color="gray" />
            <Text style={styles.actionCount}>{replyCount}</Text>
          </TouchableOpacity>

          {/* Retweet Button */}
          <TouchableOpacity onPress={handleRetweet} style={styles.actionButton}>
            <Ionicons
              name={retweeted ? "repeat" : "repeat-outline"}
              size={20}
              color={retweeted ? "green" : "gray"}
            />
            <Text style={styles.actionCount}>{retweetCount}</Text>
          </TouchableOpacity>

          {/* Like Button */}
          <TouchableOpacity onPress={handleLike} style={styles.actionButton}>
            <Ionicons
              name={liked ? "heart" : "heart-outline"}
              size={20}
              color={liked ? "red" : "gray"}
            />
            <Text style={styles.actionCount}>{likeCount}</Text>
          </TouchableOpacity>

          {/* Bookmark Button */}
          <TouchableOpacity
            onPress={handleBookmark}
            style={styles.actionButton}
          >
            <Ionicons
              name={bookmarked ? "bookmark" : "bookmark-outline"}
              size={20}
              color={bookmarked ? "gold" : "gray"}
            />
          </TouchableOpacity>

          {/* Share Button */}
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="share-outline" size={20} color="gray" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  tweetContent: {
    flex: 1,
    marginLeft: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  username: {
    fontWeight: "bold",
    fontSize: 16,
    marginRight: 10,
  },
  timeTweeted: {
    color: "gray",
    fontSize: 14,
  },
  caption: {
    marginVertical: 5,
    fontSize: 16,
  },
  tweetImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginVertical: 5,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 5,
  },
  actionButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: "row",
  },
  actionCount: {
    marginLeft: 5,
    color: "gray",
  },
});

export default TweetCard;
