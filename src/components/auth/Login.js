import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import { AuthLayout } from './layout/AuthLayout';
import { TextInput } from 'react-native';

export function Login()
{
  return (
    <AuthLayout>
      <TextInput
        style = {styles.input}
        label={'Usuário'}
        placeholder={'Digite sua email'}
      />
      <TextInput
        style = {styles.input}
        label={'Senha'}
        placeholder={'Digite sua senha'}
      />
    </AuthLayout>
    
  );
}


const styles = StyleSheet.create({
  input:{
    height: '2rem',
    backgroundColor:'#fff',
    borderRadius:'12px',
    width:'60%',
    marginBottom: '1rem'
  }

});



