import React from 'react'
import { TouchableOpacity,View, Text, StyleSheet } from 'react-native-web'

const ButtonComponent = ({children, onPress, style}) => {
  return(
    <TouchableOpacity 
      activeOpacity={0.6}
      onPress={onPress}
      styles={styles.buttonType}
    >
      <View style={{...styles.buttonType, ...style}}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </TouchableOpacity>

  )
}

const styles = StyleSheet.create({
    buttonType: {
      backgroundColor: "lightgrey",
      marginVertical: 10,
      width: "50%",
      marginHorizontal: "25%",
      border: "solid",
    },
    text:{
      color: "black",
      textAlign: "center",
    }
})

export default ButtonComponent