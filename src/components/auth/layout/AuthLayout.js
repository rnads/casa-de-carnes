import React from 'react';
import {StyleSheet, Text, View } from 'react-native';


export function AuthLayout(props)
{
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  );
}

const styles =  StyleSheet.create({
  container : {
    backgroundColor: '#fff',
    width: "100%",
    height: '100%',
    display:"flex",
    justifyContent: 'center',
    alignItems: "center"
   
  },
  })


  