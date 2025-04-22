import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@/dark_mode/hook/useTheme';
import Show_async_storage from '../../dark_mode/data_show/show_async_storage';
import Show_context_data from '../../dark_mode/data_show/show_context_data';

const about = () => {
  const { colors } = useTheme();
  return (
    <View style={[styles.container,{ backgroundColor: colors.background }]}>
      <Text style={{ color:colors.text, fontSize:'22px', fontWeight: 'bold' }}>About</Text>
      <Show_async_storage/>
      <View style={{ alignItems: 'center' }}>
        <Show_context_data />
      </View>

      
    </View>
  )
}

export default about

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

})
