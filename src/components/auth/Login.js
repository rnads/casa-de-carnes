import React from 'react';
import {Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { AuthLayout } from './layout/AuthLayout';
import { TextInput } from 'react-native';

export function Login()
{
  return (
    <View style={styles.container} >
      
      
      <TextInput
        style = {styles.input}
        label={'Usuário'}
        placeholder={'Digite sua email'}
      />
      
      <TextInput
        style = {styles.input}
        secureTextEntry={true}
        label={'Senha'}
        placeholder={'Digite sua senha'}
      />
      <Pressable style={styles.button} >
        <Text style={styles.textButton}>Entrar</Text> 
      </Pressable>
    </View>
    // <AuthLayout>
    //   
    // </AuthLayout>
    
  );
}


const styles = StyleSheet.create({
  input:{
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    backgroundColor:'#fff',
    borderRadius:12,
    width:'80%',
    marginBottom: 16,
    paddingLeft:10,
    fontSize: 16,
    marginBottom: 20
  },
  container : {
    backgroundColor: '#fff',
    width: "100%",
    height: '100%',
    display:"flex",
    justifyContent: 'center',
    alignItems: "center"
   
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





