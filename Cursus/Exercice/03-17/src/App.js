import { useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import ListProducts from './components/list-products';
import TableProduct from './components/table-product';


function App() {
  const initialProducts = [
    { reference: 100610, name: 'IphoneX', price: 900, image: 'iphone.jpg', available: true },
    { reference: 100611, name: 'Samsung A23', price: 249, image: 'samA23.jpg', available: true },
    { reference: 100612, name: 'Fusion 5', price: 256, image: 'fusion5.jpg', available: false },
    { reference: 100613, name: 'Seagate', price: 309, image: 'seagate.jpg', available: true },
    { reference: 100614, name: 'Tab S6', price: 525, image: 'tab.jpg', available: false },
    { reference: 100615, name: 'Huion Canvas', price: 278, image: 'huion.jpg', available: true },
    { reference: 100616, name: 'IphoneX', price: 900, image: 'iphone.jpg', available: true },
    { reference: 100617, name: 'IphoneX', price: 900, image: 'iphone.jpg', available: true },
  ];
 

  const [products, setProducts] = useState(initialProducts);
  
  const editProduct = (product, index) => {
    let edit = products
    edit[index] = product
    setProducts(edit);
  }

  const newProduct = (product) => {
    console.log(product);
    const tabProducts = [product, ...products];
    setProducts(tabProducts);
  }

 
  const deleteProduct = (index) => {
    console.log(index);
    const newProducts = products.filter((product, i) => {
      return i !== index
    })
    setProducts(newProducts);
  }
  console.log(products)

  return (
    <div className="container">
      <div className="row">
          <h1 className='text-center'>Liste des produits</h1>
          <TableProduct prods={products} removeProduct = {deleteProduct} prodFunc = {newProduct} edit={editProduct}/>
          <ListProducts className="" prods={products} />
      </div>
      {/* {data}
      <Autres func = {myFunc} /> */}
    </div>


  );
}

export default App;
