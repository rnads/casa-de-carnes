import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
const products =  require('../../../../database/products_table.json');


export function Product(){
    const product = products[0];
    function formatPrice(price){
        return 'R$ ' + price.toFixed(2).replace('.',',')
    }

    return (
      <View>
           <Image style={styles.logo} source={{uri:product.image}}/>
          <Text>
                {product.name} 
          </Text>
          <Text>
                {product.description} 
          </Text>
          <Text>
                {formatPrice(product.price)} 
          </Text>

          <Pressable style={styles.button} >
          <Text style={styles.textButton}>Comprar</Text> 
        </Pressable>
      </View>  
    )
}


const styles = StyleSheet.create({
    item: {
        width:"100%",
        display:"flex",
        flexDirection:"row",
        marginBottom:"16px",
        alignItems:"center"
    },
    title: {
        fontSize:18,
        fontWeight:"700"
    },
    logo: {
      width: 350,
      height: 350,
    },
    button: {
        marginRight: 40,
        alignSelf: "flex-end",
        height: 50,
        backgroundColor: '#5B0000',
        width: 130,
        borderRadius: 70,
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
        marginTop: 10
      },
      
      textButton: {
        color: "#fff"
      }

    

  });