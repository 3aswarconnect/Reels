import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ReelsScreen from './screens/ReelsScreen';
import ImagesScreen from './screens/ImagesScreen';
import UploadScreen from './screens/UploadScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Reels" component={ReelsScreen} />
      <Tab.Screen name="Images" component={ImagesScreen} />
      <Tab.Screen name="Upload" component={UploadScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
