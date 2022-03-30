import { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import ListProducts from './components/list-products';
//import Autres from './components/autres';

function App() {
  //const [data, setData] = useState(0);
  const products = [
    { reference: 100610, name: 'IphoneX', price: 900, image: 'iphone.jpg', available: true },
    { reference: 100611, name: 'Samsung A23', price: 249, image: 'samA23.jpg', available: true },
    { reference: 100612, name: 'Fusion 5', price: 256, image: 'fusion5.jpg', available: false },
    { reference: 100613, name: 'Seagate', price: 309, image: 'seagate.jpg', available: true },
    { reference: 100614, name: 'Tab S6', price: 525, image: 'tab.jpg', available: false },
    { reference: 100615, name: 'Huion Canvas', price: 278, image: 'huion.jpg', available: true },
    { reference: 100616, name: 'IphoneX', price: 900, image: 'iphone.jpg', available: true },
    { reference: 100617, name: 'IphoneX', price: 900, image: 'iphone.jpg', available: true },
  ];
  // let a = 5;
  // const myFunc = (x) =>{
  //   a = x;
  //   setData(data + 7)
  //   console.log(x);
  //   console.log(a);
  // }
  return (
    <div className="container">
      <div className="row">
          <h1>Liste des produits</h1>
          <ListProducts className="" prods={products} />
      </div>
      {/* {data}
      <Autres func = {myFunc} /> */}
    </div>
  );
}

export default App;
