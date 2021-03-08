import React, { Component, Fragment, useEffect, useState, useCallback } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Explore from "./App/Components/Explore";
import Collaborate from "./App/Components/Collaborate";
import Notifications from "./App/Components/Notifications";
import Profile from "./App/Components/Profile";

import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // TODO: add center button. will probably be nested stack nav with this.
    <NavigationContainer style={styles.container}>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Explore") {
            iconName = focused ? 'compass' : 'compass-outline';
          } else if (route.name === "Collaborate") {
            iconName = focused ? 'people' : 'people-outline';
          } else if (route.name === "Notifications") {
            iconName = focused ? 'notifications' : 'notifications-outline';
          } else if (route.name === "Profile") {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />
        }
      })}

      tabBarOptions={{
        labelStyle: {},
        activeTintColor: '#FF9078',
        inactiveTintColor: '#757474',
      }}>
        <Tab.Screen name="Explore" component={Explore} />
        <Tab.Screen name="Collaborate" component={Collaborate} />
        <Tab.Screen name="Notifications" component={Notifications} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
