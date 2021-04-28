import Product from "./Product";
import React, { Component, Fragment } from 'react';
import Title from './Title';
import {ProductConsumer} from "../context";




export default class ProductList extends Component {
    render(){
        return(
           <React.Fragment>
            <div className="py-5">
            <div className="container">
                <div className="text-title" style={{textAlign:"center"}}>
            <Title name="OUR   " title= "PRODUCTS" ></Title>
            </div>
            <div className="row">
                <ProductConsumer>
                    {(value) => {
                        return value.products.map( product => {
                            return <Product key = {product.id} product = {product}/>
                        })

                    }}
                </ProductConsumer>
            </div>
            </div>
            </div>
           </React.Fragment>
        )
    }
}