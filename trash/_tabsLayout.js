import { Tabs } from "expo-router";

export default function Tabs_Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name='index'
        options={{
          headerShown:false, 
          headerTitle:'StickerSmash',
          headerLeft:()=><></>,
          headerStyle: {
            backgroundColor: 'black', // ✅ set background
          },
          tabBarStyle: {
            backgroundColor: 'black', // ✅ set background
          },
          headerTintColor: 'white', // ✅ set text/icon color
          headerTitleStyle: {
            color: 'white', // ✅ specifically for the title text
          },
        }}
      />
      <Tabs.Screen 
        name="about"
        options={{
          headerShown:false,
          headerTitle:'About',
          headerStyle: {
            backgroundColor: 'black', // ✅ set background
          },
          tabBarStyle: {
            backgroundColor: 'black', // ✅ set background
          },
          headerTintColor: 'white', // ✅ set text/icon color
          headerTitleStyle: {
            color: 'white', // ✅ specifically for the title text
          },
        }}
      />
      <Tabs.Screen 
        name="+not-found"
        options={{
          headerTitle:'404 Page Not Found',
          headerStyle: {
            backgroundColor: 'black', // ✅ set background
          },
          headerTintColor: 'white', // ✅ set text/icon color
          headerTitleStyle: {
            color: 'white', // ✅ specifically for the title text
          },
        }}
      />
    </Tabs>
  )
}
