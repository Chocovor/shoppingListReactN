import React from 'react'
import { Text, StyleSheet, View, Pressable } from 'react-native'
import {FontAwesome} from '@expo/vector-icons';


const BarNavigation =() => {
    return (
      <View>
        <Pressable style={styles.navContainer}>
          <FontAwesome
            name='image'
            size={30}
            color= "black"
            onPress={() => {}}
          /> 
          {/* <FontAwesome
            name='gem'
            size={30}
            color= "black"
            onPress={() => {}}
          />  */}
          <FontAwesome
            name='bell'
            size={30}
            color= "black"
            onPress={() => {}}
          /> 
          <FontAwesome
            name='diamond'
            size={30}
            color= "black"
            onPress={() => {}}
          />
        </Pressable>
      </View>
    )
  }
  const styles = StyleSheet.create({
    navContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      border:'solid'
    }
  })

export default BarNavigation
