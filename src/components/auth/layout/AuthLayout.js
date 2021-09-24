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
      display: 'flex',
      backgroundColor: '#5B0000',
      height: '100vh',
      justifyContent: 'center',
      alignItems:'center'
    }
  })