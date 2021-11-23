import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Layout } from '../layout/Layout';
import { Item } from './Item';
const products =  require('../../../../database/products_table.json');

export function Products({navigation}){

    function openProduct(id){
        const index = id - 1;
        navigation.navigate('Product',{index});

    }
    return (
        <Layout>
            <>
            {
                products.map((product)=>{
                    return (
                        <Pressable onPress={()=>openProduct(product.id)}>
                            <Item product={product} navigate={navigation.navigate}/>
                        </Pressable>
                    )
                })
            }
            </>
        </Layout>

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
      width: 100,
      height: 100,
      borderRadius: "50%"
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