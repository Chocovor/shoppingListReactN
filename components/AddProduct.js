import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, View, FlatList } from 'react-native';

const AddProduct = ({submitHandler}) => {
const [product, setProduct] = useState("");
const inputHandler = (val) => {
    setProduct(val);
  };

  return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="nouveau produit"
          value={product}
          onChangeText={inputHandler}
        ></TextInput>
        <Button style={styles.button} title="Valider" onPress={()=>submitHandler(product,setProduct)}></Button>
      </View>
  )
}

const styles = StyleSheet.create({
    inputContainer: {
      backgroundColor: "lightgrey",
      flexDirection: "row",
      marginBottom: 10,
      alignItems: "center",
      justifyContent: "space-between",
    },
    textInput: {
      color: "black",
      fontSize: 20,
    },
    button:{
        alignItems: "flex-end",
        marginLeft: 20,
    }
})


export default AddProduct