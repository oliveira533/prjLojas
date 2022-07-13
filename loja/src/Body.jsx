import React from "react";
import CardProd from "./BodyComponents/Produto";
import './Body.css'
import { Carousel } from 'rsuite';

const Main = ({prods}) =>{
    return (
    <div className="container">
      {prods.map(prod => <CardProd className="produto" prod={prod}/>)}
    </div>
)};

export default Main;