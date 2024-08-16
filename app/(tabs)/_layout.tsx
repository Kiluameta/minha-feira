import React from "react";
import { Platform } from 'react-native';
import { Tabs } from "expo-router";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Colors from "@/constants/Colors";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  color: string;
}) {
  return <MaterialCommunityIcons size={40} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs 
      screenOptions={{ 
        tabBarActiveTintColor: Colors.green[100], 
        tabBarInactiveTintColor: Colors.green[400],
        headerShown: false, 
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: getBottomSpace() + RFValue(60),
          zIndex: 10,
          // opacity: loading || startVistoria ? 0 : 1,
          paddingVertical: Platform.OS === "ios" ? 15 : 5,
          borderTopEndRadius: 30,
          borderTopStartRadius: 30,
          shadowColor: "rgba(0,0,0,0.3)",
          shadowOffset: { width: 0, height: 6 },
          shadowOpacity: 1,
          shadowRadius: 6,
          elevation: 10,
          marginTop: -getBottomSpace() - RFValue(60),
          backgroundColor: Colors.green[500],
        },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarIcon: ({ color }) => <TabBarIcon name="clock-time-eight-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <TabBarIcon name="basket" color={color} />,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({ color }) => <TabBarIcon name="account-outline" color={color} />,
        }}
      />
    </Tabs>
  );
}
