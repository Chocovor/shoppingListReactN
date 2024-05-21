import React from 'react';
import { Image,View, Text, StyleSheet } from 'react-native-web'


const Header =({children,style}) => {
  return (
    <View style= {{...styles.HD,...style}}>

      <Image
        source= "https://medine-distribution.fr/154-large_default/coca-cola-33cl-x-24.jpg"
        style={styles.logo}
      ></Image>

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
})

export default Header
