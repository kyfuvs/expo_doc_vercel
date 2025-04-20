import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function Layout_stack() {
  return (
    <>
    <StatusBar style="light"/>
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
    </>
  )
}
