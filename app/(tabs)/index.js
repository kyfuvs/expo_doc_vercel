import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

const index = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { fontSize:'22px', fontWeight: 'bold' }]}>HOME</Text>
      {/* <Link href={'/about'} style={styles.button}>
        About
      </Link> */}
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'black',
  },
  text: {
    color: 'white',
  },
  button:{
    fontSize:18,
    textDecorationLine:'underline',
    color:'#fff',
  }
})
