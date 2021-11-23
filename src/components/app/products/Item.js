import React from 'react';
import { Text, View ,Image, StyleSheet} from 'react-native';



export function Item(props){
    function formatPrice(price){
        return 'R$ ' + price.toFixed(2).replace('.',',')
    }

    return(
        <View style={styles.item}>
            <Image style={styles.logo} source={{uri:props.product.image}}/>
            <View >
                <Text style={styles.title}>{props.product.name}</Text>
                <Text>{formatPrice(props.product.price)}</Text>
            </View>
            
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

    

  });