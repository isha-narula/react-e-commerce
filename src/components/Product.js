import React, { Component } from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {ProductConsumer} from "../context";
import PropTypes from 'prop-types';



export default class Product extends Component {
    render() {
        const {id,title,img,price,inCart} = this.props.product;
        return (
            <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                 
                 <ProductConsumer>
                  {(value) => (<div className="img-container" onClick={()=>value.handleDetail(id)}>
                     <Link to="/details">
                     <img src={img} className="card-img-top" alt="product" >
                     </img>
                     </Link>
                     <button className="cart-btn" disabled={inCart?true:false} onClick={()=> {
                         value.addToCart(id);
                         value.openModal(id);
                        }}
                     >      
                      {inCart?(<p className="text-capitalize mb-0" disabled>inCart</p>):(<i className = "fas fa-cart-plus"></i>)}   
                      </button>       
                 </div>
                )}
                 </ProductConsumer>
                </div>
               
                
                {/*Card Footer*/}

                <div className="card-footer d-flex justify-content-between">
                    <p className="align-self-center mb-0">
                         {title}
                    </p>
                    <h5>
                        <div className="text-blue font-italic mb-0">
                            <span>
                                $
                            </span>
                            {price}
                        </div>
                    </h5>
                </div>
            </div>
           
        );
    }
}


Product.propTypes = {
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
};
