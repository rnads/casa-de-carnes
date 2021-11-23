import { CurrentRenderContext } from '@react-navigation/core';
import React from 'react';
import { View,StyleSheet } from 'react-native';

export function Layout(props){
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        width:"100%",
        height: "100%",

        background:"#fff"
    }
    
});