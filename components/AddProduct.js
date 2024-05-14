import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, View, FlatList } from 'react-native';

const AddProduct = ({submitHandler}) => {
const [product, setProduct] = useState("");
const inputHandler = (val) => {
    setProduct(val);
  };
const handleClick = () => {
  submitHandler(product);
  setProduct("")
}

  return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="inscrivez un nouveau produit ici"
          value={product}
          onChangeText={inputHandler}
        ></TextInput>
        <View style={styles.button}>
          {/* <Button  title="Valider" onPress={()=>submitHandler(product,setProduct)}></Button> */}
          <Button title= "Valider" onPress={handleClick}></Button>
        </View> 
      </View>
  )
}

const styles = StyleSheet.create({
    inputContainer: {
      backgroundColor: "lightgrey",
      marginBottom: 10
    },
    textInput: {
      color: "black",
      backgroundColor: "white",
      fontSize: 20,
      marginVertical: 15,
      borderWidth: 1,
      textAlign: "center",
    },
    button:{
      flexDirection:"row",
      justifyContent:'space-around',
      
    },
})


export default AddProduct