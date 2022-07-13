import './App.css';
import Header from './Header';
import React, { useState } from 'react';
import Main from './Body';

function App() {

  const[prods, setProd] = useState([
    {
      id: '1',
      name: 'Camisa 1 do São Paulo 2022',
      image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8718d17b690146538584ab190144a3b9_9366/Camisa_Sao_Paulo_FC_1_Branco_FH7284_01_laydown.jpg',
      league: 'Brasileirão',
      team: 'São Paulo'
    },
    {
      id: '2',
      name: 'Camisa 2 do São Paulo 2022',
      image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/54f2731e89c9479d916cae8b015475c4_9366/Camisa_2_Sao_Paulo_FC_22-23_Vermelho_HK3043_01_laydown.jpg',
      league: 'Brasileirão',
      team: 'São Paulo'
    },
    {
      id: '3',
      name: 'Camisa 3 do São Paulo 2022',
      image: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/b4d49a8063954b369737ad9c011a79ab_9366/Camisa_3_Sao_Paulo_FC_21_Infantil_Vermelho_GQ9290_01_laydown.jpg',
      league: 'Brasileirão',
      team: 'São Paulo'
    },
    {
      id: '4',
      name: 'Camisa 1 do Manchester City',
      image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/759204/01/fnd/BRA/w/1000/h/1000/fmt/png',
      league: 'Premier League',
      team: 'Manchester City'
    },
    {
      id: '5',
      name: 'Camisa 2 do Manchester City',
      image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/759213/02/fnd/BRA/w/1000/h/1000/fmt/png',
      league: 'Premier League',
      team: 'Manchester City'
    },
    {
      id: '6',
      name: 'Camisa 3 do Manchester City',
      image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/759219/03/fnd/BRA/w/1000/h/1000/fmt/png',
      league: 'Premier League',
      team: 'Manchester City'
    },
    {
      id: '7',
      name: 'Camisa 1 do Real Marid',
      image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a4ebccafc3c6487ca477acda00f25d5f_9366/Camisa_1_Real_Madrid_21-22_Branco_GQ1359_01_laydown.jpg',
      league: 'La Liga',
      team: 'Real Madrid'
    },
    {
      id: '8',
      name: 'Camisa 2 do Real Marid',
      image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1ac74b6060f44595ab13acf501292b03_9366/Camisa_2_Real_Madrid_21-22_Azul_H40942_01_laydown.jpg',
      league: 'La Liga',
      team: 'Real Madrid'
    },
    {
      id: '9',
      name: 'Camisa 2 do Real Marid',
      image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/aedb5d4e34264d4f8f6face200b54e9a_9366/Camisa_3_Real_Madrid_21-22_Turquesa_GR4005_01_laydown.jpg',
      league: 'La Liga',
      team: 'Real Madrid'
    },
    {
      id : '10',
      name: 'Camisa 1 do PSG',
      image: 'https://imgnike-a.akamaihd.net/1300x1300/01091615.jpg',
      league: 'Ligue 1',
      team: 'Paris Saint-Germain'
    },
    {
      id : '11',
      name: 'Camisa 2 do PSG',
      image: 'https://imgnike-a.akamaihd.net/1300x1300/01091451.jpg',
      league: 'Ligue 1',
      team: 'Paris Saint-Germain'
    },
    {
      id : '12',
      name: 'Camisa 3 do PSG',
      image: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/976/005/products/sem-titulo-2201-3d653b603f6c9e680616316297514345-640-0.jpg',
      league: 'Ligue 1',
      team: 'Paris Saint-Germain'
    },
    {
      id : '13',
      name: 'Camisa 1 do Liverpool',
      image: 'https://images.lojanike.com.br/860x860/produto/camisa-nike-liverpool-i-202122-torcedor-pro-masculina-DB2560-688-1-11621433205.jpg',
      league: 'Premier League',
      team: 'Liverpool'
    },
    {
      id : '14',
      name: 'Camisa 2 do Liverpool',
      image: 'https://images.lojanike.com.br/860x860/produto/camiseta-nike-liverpool-ii-202122-torcedor-masculina-DB2558-111-1-11625665747.jpg',
      league: 'Premier League',
      team: 'Liverpool'
    },
    {
      id : '15',
      name: 'Camisa 1 do ajax',
      image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/45950a1c198549b9b79bacda00f657dd_9366/Camisa_1_Ajax_Amsterdam_21-22_Branco_GT7137_01_laydown.jpg',
      league: 'Eredivisie',
      team: 'Ajax'
    },
    {
      id : '16',
      name: 'Camisa 2 do ajax',
      image: 'https://assets-mantosdofutebol.sfo2.digitaloceanspaces.com/wp-content/uploads/2021/05/Camisa-reserva-do-Ajax-2021-2022-Adidas-kit-1.jpg',
      league: 'Eredivisie',
      team: 'Ajax'
    },
    {
      id : '17',
      name: 'Camisa 3 do ajax',
      image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/dba79fc5508f45678aa7acf501709d0c_9366/Camisa_3_Ajax_Amsterdam_21-22_Preto_GT9559_01_laydown.jpg',
      league: 'Eredivisie',
      team: 'Ajax'
    },
  ])

  return (
    <div className="App">
      <Header className="header"/>
      <Main prods={prods}/>
    </div>
  );
}

export default App;
