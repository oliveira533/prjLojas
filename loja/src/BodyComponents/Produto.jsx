import React from "react";
import './Produto.css'

const CardProd = ({prod}) =>{
    return(
        <div className="prod-container">
                <img src={prod.image} alt="" />
                <label className="texto">{prod.name}</label>
        </div>
    );
}

export default CardProd;