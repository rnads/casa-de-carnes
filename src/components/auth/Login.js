import React, { useState } from 'react';
import {Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { AuthLayout } from './layout/AuthLayout';
import { TextInput } from 'react-native';
const bcrypt = require('bcryptjs')



export function Login()
{
  const users = require('../../../database/users_table.json');
  const [password,setPassword] = useState('');
  const [email,setEmail] = useState();

function authenticate(){
 
  const  result = bcrypt.compareSync(password,users[0].password);
  console.log(result);
}

  return (
    <AuthLayout>
      <>
        <TextInput
          style = {styles.input}
          label={'Usuário'}
          placeholder={'Digite sua email'}
          value={email} 
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style = {styles.input}
          secureTextEntry={true}
          label={'Senha'}
          placeholder={'Digite sua senha'}
          value={password} 
          onChangeText={(text) => setPassword(text)}
        />
        <Pressable style={styles.button} onPress={authenticate}>
          <Text style={styles.textButton}>Entrar</Text> 
        </Pressable>
      </>
    </AuthLayout>
 
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





