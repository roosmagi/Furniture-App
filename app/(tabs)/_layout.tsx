import { Image } from 'expo-image';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#4F63AC',
        tabBarInactiveTintColor: '#999999',
        tabBarShowLabel: false,
        tabBarStyle: {
          padding: 3,
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarItemStyle: {
          flex: 0,
          width: 65,
          marginHorizontal: 8,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={
                focused
                  ? require('@/assets/icons/home-solid.svg')
                  : require('@/assets/icons/home.svg')
              }
              style={{ width: 24, height: 24, tintColor: color }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={
                focused
                  ? require('@/assets/icons/favorites-solid.svg')
                  : require('@/assets/icons/favorites.svg')
              }
              style={{ width: focused ? 24 : 16, height: focused ? 24 : 20, tintColor: color }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <Image
              source={
                focused
                  ? require('@/assets/icons/profile-solid.svg')
                  : require('@/assets/icons/profile.svg')
              }
              style={{ width: focused ? 24 : 24, height: focused ? 24 : 24, tintColor: color }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
