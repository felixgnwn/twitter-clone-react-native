import React from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Import Native Stack Navigator
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import SearchScreen from "./screens/SearchScreen";
import HomeScreen from "./screens/HomeScreen";
import NotificationsScreen from "./screens/NotificationsScreen";
import InboxScreen from "./screens/InboxScreen";
import SplashScreen from "./screens/SplashScreen";
import ProfileScreen from "./screens/sidebar/ProfileScreen";
import PremiumScreen from "./screens/sidebar/PremiumScreen";
import BookmarksScreen from "./screens/sidebar/BookmarksScreen";
import ListsScreen from "./screens/sidebar/ListsScreen";
import SpacesScreen from "./screens/sidebar/SpacesScreen";
import MonetizationScreen from "./screens/sidebar/MonetizationScreen";
import SettingScreen from "./screens/sidebar/SettingScreen";

function CommunitiesScreen() {
  return (
    <View style={styles.container}>
      <Text>Communities Page</Text>
    </View>
  );
}

// Sidebar Content
function CustomDrawerContent() {
  const navigation = useNavigation();
  return (
    <View style={styles.drawerContent}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={require("./assets/profile-pic.webp")}
          style={styles.profileImage}
        />
        <Text style={styles.username}>Your Username</Text>
        <Text style={styles.stats}>100 Followings 0 Followers</Text>
      </View>

      <View style={styles.separator} />

      {/* Menu Items with Icons */}
      <TouchableOpacity
        style={styles.menuItemContainer}
        onPress={() => navigation.navigate("Profile")}
      >
        <Ionicons name="person-outline" size={20} color="gray" />
        <Text style={styles.menuItem}>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItemContainer}
        onPress={() => navigation.navigate("Premium")}
      >
        <Ionicons name="star-outline" size={20} color="gray" />
        <Text style={styles.menuItem}>Premium</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItemContainer}
        onPress={() => navigation.navigate("Bookmarks")}
      >
        <Ionicons name="bookmark-outline" size={20} color="gray" />
        <Text style={styles.menuItem}>Bookmarks</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItemContainer}
        onPress={() => navigation.navigate("Lists")}
      >
        <Ionicons name="list-outline" size={20} color="gray" />
        <Text style={styles.menuItem}>Lists</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItemContainer}
        onPress={() => navigation.navigate("Spaces")}
      >
        <Ionicons name="mic-outline" size={20} color="gray" />
        <Text style={styles.menuItem}>Spaces</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menuItemContainer}
        onPress={() => navigation.navigate("Monetizations")}
      >
        <Ionicons name="cash-outline" size={20} color="gray" />
        <Text style={styles.menuItem}>Monetization</Text>
      </TouchableOpacity>

      <View style={styles.separator} />

      <TouchableOpacity
        style={styles.menuItemContainer}
        onPress={() => navigation.navigate("Settings")}
      >
        <Ionicons name="settings-outline" size={20} color="gray" />
        <Text style={styles.menuItem}>Settings & Support</Text>
      </TouchableOpacity>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name="home-outline"
              color={focused ? "black" : "gray"}
              size={size}
            />
          ),
          tabBarLabel: () => null,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="SearchTab"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name="search-outline"
              color={focused ? "black" : "gray"}
              size={size}
            />
          ),
          tabBarLabel: () => null,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="CommunitiesTab"
        component={CommunitiesScreen}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name="people-outline"
              color={focused ? "black" : "gray"}
              size={size}
            />
          ),
          tabBarLabel: () => null,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="NotificationsTab"
        component={NotificationsScreen}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name="notifications-outline"
              color={focused ? "black" : "gray"}
              size={size}
            />
          ),
          tabBarLabel: () => null,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="InboxTab"
        component={InboxScreen}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name="mail-outline"
              color={focused ? "black" : "gray"}
              size={size}
            />
          ),
          tabBarLabel: () => null,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        {/* Splash Screen */}
        <Stack.Screen name="Splash" component={SplashScreen} />

        {/* Main App with Drawer Navigator */}
        <Stack.Screen name="Main">
          {() => (
            <Drawer.Navigator drawerContent={() => <CustomDrawerContent />}>
              <Drawer.Screen
                name="HomeDrawer"
                component={BottomTabs}
                options={({ navigation }) => ({
                  headerTitle: () => (
                    <Image
                      source={require("./assets/x-logo.png")}
                      style={{ width: 40, height: 40 }}
                      resizeMode="contain"
                    />
                  ),
                  headerTitleAlign: "center",
                  headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                      <Image
                        source={require("./assets/profile-pic.webp")}
                        style={{
                          width: 40,
                          height: 40,
                          borderRadius: 20,
                          marginLeft: 10,
                        }}
                      />
                    </TouchableOpacity>
                  ),
                })}
              />
              <Drawer.Screen name="Profile" component={ProfileScreen} />
              <Drawer.Screen name="Premium" component={PremiumScreen} />
              <Drawer.Screen name="Bookmarks" component={BookmarksScreen} />
              <Drawer.Screen name="Lists" component={ListsScreen} />
              <Drawer.Screen name="Spaces" component={SpacesScreen} />
              <Drawer.Screen
                name="Monetizations"
                component={MonetizationScreen}
              />
              <Drawer.Screen name="Settings" component={SettingScreen} />
            </Drawer.Navigator>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  drawerContent: {
    flex: 1,
    padding: 20,
    paddingTop: 80,
  },
  profileSection: {
    marginBottom: 20,
    alignItems: "center",
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
  },
  stats: {
    fontSize: 14,
    color: "gray",
  },
  menuItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  menuItem: {
    fontSize: 20,
    marginVertical: 10,
    fontWeight: "bold",
    paddingLeft: 10,
  },
  separator: {
    marginVertical: 10,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
  },
});
