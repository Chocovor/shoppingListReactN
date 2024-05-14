import React from 'react'
import { View,Text, StyleSheet, TouchableOpacity} from 'react-native'

const Products = ({name}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.2}
      onPress={()=> console.log('cliqué')}
    >
        <View style={styles.producItems}>
            <Text style={styles.item}>{name}</Text>
        </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({

    productItems: {
      marginTop: 10,
    },
    item: {
      backgroundColor: "pink",
      padding: 20,
      fontSize: 30,
      marginVertical: 6,
      textAlign: "center"
    },
  });

export default Products