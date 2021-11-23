import React from 'react';
import { Layout } from '../layout/Layout';
import { Item } from './Item';
const products =  require('../../../../database/products_table.json');

export function Products({navigation}){

    
    return (
        <Layout>
            <>
            {
                products.map((product)=>{
                    return (<Item product={product} navigation={navigation}/>)
                })
            }
            </>
        </Layout>

    )
}
