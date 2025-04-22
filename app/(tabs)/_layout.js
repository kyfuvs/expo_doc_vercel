// project/app/(tabs)/Tabs_Layout.js
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Toggler_dark_mode from "../../dark_mode/components/toggler_dark_mode"; // ✅ Import it
import { useTheme } from '@/dark_mode/hook/useTheme';

export default function Tabs_Layout() {
 const { colors } = useTheme();
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
        //   backgroundColor: 'black',
        //   borderBottomColor: 'black',
          backgroundColor: colors.background,
          borderBottomColor: colors.background,
        },
        // headerTintColor: 'white',
        headerTintColor: colors.text,
        headerShadowVisible: true,
        tabBarActiveTintColor: '#ffd33d',
        tabBarStyle: {
        //   backgroundColor: 'black',
          backgroundColor: colors.background,
        },
        headerRight: () => <Toggler_dark_mode />, // ✅ Add this
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: 'Sticker Smash',
          headerTitleAlign: 'center',
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'home-sharp' : 'home-outline'}
              color={focused ? '#ffd33d' : 'grey'}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          headerShown: true, // ✅ Make sure it's true so the header shows
          headerTitle: 'About', // You can customize this too
          headerTitleAlign: 'center',
          tabBarLabel: 'About',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'information-circle' : 'information-circle-outline'}
              color={focused ? '#ffd33d' : 'grey'}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
