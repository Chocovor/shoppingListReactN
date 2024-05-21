import React from 'react';
import { Image, ImageBackground,View, Text, StyleSheet } from 'react-native-web'

// import {useFonts,BalooBhaina2_700Bold}from '@expo-google-fonts/balooBhaina2_700Bold';


const Header =({children,style}) => {
  return (
    <View style= {{...styles.HD,...style}}>

      {/* <Image
        source= {require("https://medine-distribution.fr/154-large_default/coca-cola-33cl-x-24.jpg")}
        style={styles.HDLogo}
      /> */}

      <Text style={styles.HDText}> {children}</Text>

    </View>
  )
}


const styles = StyleSheet.create({
    HD:{
        backgroundColor: 'lightgreen',
        width: '100%',
        justifyContent: 'flex-start'
    },
       HDLogo:{
        color: 'black',
    },
        HDText:{
         color: 'darkblue',
         justifyContent: "center",
         fontFamily: "BalooBhaina2_700Bold"

    },
})

export default Header
