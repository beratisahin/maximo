import React, { Component } from 'react';
import "./Product.css";


export default class Product extends Component { 
render() {
     //Destructing
     const {name,photo,price}=this.props;
     return (
        <div class="productTemplate">
               
               <p className="productName">{name}</p>
                <div class="price">
                    <p className="aktion"><i>Aktion</i></p>
                    <p className="productPrice"><span style={{fontSize:"8px",paddingRight:"3px"}}>jg</span> {price}</p>       
                </div>
                
                
               
                    
                
                
                <img className="productPhoto" src={photo} title="Maximo"></img>
                
                

        </div>

     )
}
}