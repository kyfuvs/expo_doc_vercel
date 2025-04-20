import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name='(tabs)'
        options={{
          headerShown:false,
        }}
      />
    
      <Stack.Screen 
        name="+not-found"
        options={{
          headerTitle:'404 Page Not Found',
          headerStyle: {
            backgroundColor: 'black', // ✅ set background
          },
          headerTintColor: 'white', // ✅ set text/icon color
          // headerTitleStyle: {
          //   color: 'white', 
          // },
        }}
      />
    </Stack>
  )
}
