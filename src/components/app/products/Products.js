import React from 'react';
import { ScrollView, View,Text  } from 'react-native';
import { NativeRouter} from 'react-router-native';
import { Layout } from '../layout/Layout';
import { Item } from './Item';
const products =  require('../../../../database/products_table.json');

export function Products(){
    return (
        <Layout>
            <>
            {
                products.map((product)=>{
                    return (<Item product={product}/>)
                })
            }
            </>
        </Layout>

    )
}
