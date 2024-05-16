import React, { useState } from 'react';
import Products from "./components/Products";
import AddProduct from "./components/AddProduct";
import { Button, StyleSheet, TextInput, View, FlatList, ImageBackground } from 'react-native';




export default function App() {

  // const [product, setProduct] = useState ("");

  const [myProducts, setMyProducts] = useState([]);

  const idString = Date.now().toString(); //on créé un identifiant unique a chaque produit

  // const submitHandler = (product, setProduct) => { //enregistre les nouveaux produits dans le tableaux Produits
  //   const idString = Date.now().toString();
  //   setMyProducts(currentMyProducts => [{key: idString, name: product},... currentMyProducts]);
  //   setProduct('')
  // }
  const submitHandler = (product) => { //enregistre les nouveaux produits dans le tableaux Produits
    const idString = Date.now().toString();
    setMyProducts(currentMyProducts => [{key: idString, name: product},... currentMyProducts]);
  }
  const deleteProduct = (key) => {
    console.log("delete", product);
    setMyProducts(currentMyProducts => {
      return currentMyProducts.filter( product=> product.key != key)
    })
  }

  return (
    
    <ImageBackground source= {"https://www.regilait.com/app/uploads/2023/03/cookies-caramel-paques-oeufs-en-chocolat-lait-concentre-sucre-regilait.jpg"} style={styles.container}>
      <AddProduct submitHandler={submitHandler}>

      </AddProduct>
      <FlatList
        data={myProducts}

        renderItem={({item}) => (
          <Products 
            name={item.name}
            idString={item.key} 
            deleteProduct={deleteProduct}
            />
        )}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingTop: 60
  }
})