import { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/js/dist/modal.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListProducts from './components/list-products';
import AddProduct from './components/add-product'
import TableProduct from './components/table-product';
import { FaPlusSquare } from "react-icons/fa";
import EditProduct from './components/edit-product';


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
  const [open, setOpen] = useState(false);
  const [newP, setNewP] = useState(null);
  const [newRef, setNewRef] = useState('');
  const newProduct = (product) => {
    console.log(product);
    const tabProducts = [product, ...products];
    setProducts(tabProducts);
  }

  const currentProduct = (product, id) => {
    setNewP(product);
    setNewRef(id);
  }

  const updateProduct = (pr, id) => {
    console.log(pr);
    const productsClone = [...products];
    productsClone[id] = { ...pr };
    console.log(productsClone);
    setProducts(productsClone);
    //setProducts(products.map((prod, index) => (index === id ? pr : newP)))
  }
  const deleteProduct = (index) => {
    console.log(index);
    const newProducts = products.filter((product, i) => {
      return i !== index
    })
    setProducts(newProducts);
  }

  return (
    <div className="container">
      <div className="row">
        <h1>Liste des produits</h1>

        {open && !newP && <AddProduct prodFunc={newProduct} />}
        {newP && <EditProduct editP={newP} index={newRef} update={updateProduct} />}
        <div className='text-end'>
          {!open && <button className='btn btn-warning' onClick={() => { setOpen(true); setNewP(null) }}>
            <FaPlusSquare />
          </button>}
        </div>
        <TableProduct prods={products} removeProduct={deleteProduct} edit={currentProduct} update={updateProduct} />
        <ListProducts className="" prods={products} />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
