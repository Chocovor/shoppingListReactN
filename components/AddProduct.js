import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, View, FlatList } from 'react-native';
import ButtonComponent from '../components/ButtonComponent'

const AddProduct = ({submitHandler}) => {
const [product, setProduct] = useState("");
const inputHandler = (val) => {
    setProduct(val);
  };
const handleClick = () => {
  submitHandler(product);
  setProduct("")
}
const handleClick2 = () => {
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
          <Button title= "Annuler" onPress={handleClick2}></Button>
        </View> 

          <ButtonComponent
            // title="Valider"
            onPress={handleClick}
            style={styles.buttonValider}
          >
            valider
          </ButtonComponent>

          <ButtonComponent
            // title="Annuler"
            onPress={handleClick2}
            style={styles.buttonAnnuler}

          >annuler</ButtonComponent>

          <ButtonComponent>test</ButtonComponent>
        
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
    buttonValider:{
      backgroundColor: "green",

    },
    buttonAnnuler:{
      backgroundColor: "red",
      
    },
})


export default AddProduct