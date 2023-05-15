import React from "react";

function Products(props){
    return (
        <article>
            <span>{props.button}</span>
            <img src={props.image} alt=""/>
            <p>{props.name}</p>
            <h4>€{props.price},-</h4>
        </article>
    )
}

export default Products;