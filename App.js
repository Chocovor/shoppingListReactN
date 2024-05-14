import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View, FlatList } from 'react-native';
import Products from "./components/Products";
import AddProduct from "./components/AddProduct";



export default function App() {

  // const [product, setProduct] = useState ("");

  const [myProducts, setMyProducts] = useState([]);

  const idString = Date.now().toString(); //on créé un identifiant unique a chaque produit

  const submitHandler = (product, setProduct) => { //enregistre les nouveaux produits dans le tableaux Produits
    const idString = Date.now().toString();
    setMyProducts(currentMyProducts => [{key: idString, name: product},... currentMyProducts]);
    setProduct('')
  }

  return (
    <View style={styles.container}>
      <AddProduct submitHandler={submitHandler}>

      </AddProduct>
      <FlatList
        data={myProducts}

        renderItem={({item}) => <Products name={item.name}/>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingTop: 60
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    fontSize: 16,
    marginVertical: 12,
    paddingHorizontal: 12
  },
})