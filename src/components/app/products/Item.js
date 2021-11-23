import React from 'react';
import { Text, View ,Image, StyleSheet, Pressable} from 'react-native';



export function Item(props,){

    function formatPrice(price){
        return 'R$ ' + price.toFixed(2).replace('.',',')
    }
    function openProduct(id){
        const index = id - 1;
        props.navigation.navigate('Product',{index});

    }
    return(
        <View style={styles.item} >
            <Image style={styles.logo}   source={{uri:props.product.image}}/>
            <View >
                <Text style={styles.title}>{props.product.name}</Text>
                <Text>{formatPrice(props.product.price)}</Text>
            </View>
            <Pressable style={styles.button} onPress={()=>openProduct(props.product.id)}>
                <Text style={styles.textButton}>Entrar</Text> 
            </Pressable>
        </View>
    );
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