import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Tabs_Layout() {
  return (
    <Tabs 
      screenOptions={{
        headerStyle:{
            backgroundColor:'black',
            borderBottomColor:'black',
        },
        headerTintColor:'white',
        headerShadowVisible:true,
        tabBarActiveTintColor:'#ffd33d', //orange-color
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
        //   headerShown:false, 
          headerTitle:'Sticker Smash',
          tabBarLabel:'Home',
          tabBarIcon:({focused,color})=>(
             <Ionicons 
               name={focused ? 'home-sharp':'home-outline'}
               color={focused ? '#ffd33d':'white'}
               size={24}/>
            ),
          tabBarStyle: {
            backgroundColor: 'black', // ✅ set background
          },
        }}
      />
      <Tabs.Screen 
        name="about"
        options={{
          headerShown:false, 
          tabBarLabel:'About',
          tabBarIcon:({focused,color})=>(
            <Ionicons 
              name={focused ? 'information-circle':'information-circle-outline'}
              color={focused ? '#ffd33d':'white'}
              size={24}/>
           ),
          tabBarStyle: {
            backgroundColor: 'black', // ✅ set background
          },
        }}
      />
    
    </Tabs>
  )
}
