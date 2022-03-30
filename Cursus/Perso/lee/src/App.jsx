import logo from './logo.svg';
import './App.css';
import Products from './components/product';

function App() {
    const products = [
        {reference : 100610, name:'IphoneX', price:900,image:"iphone.png",available:'true'},
        {reference : 100114, name:'Samsung A23', price:249,image:"sam.jpg",available:'true'},
        {reference : 103345, name:'Fusion5', price:256,image:"fusion5.jpg",available:'false'},
        {reference : 104467, name:'Seagate IronWolf', price:309,image:"seagate.jpg",available:'true'},
        {reference : 106654, name:'Tab S6- 10.5', price:525,image:"tab.jpg",available:'false'},
        {reference : 100619, name:'Huion KAMVAS Pro', price:278,image:"huion.jpg",available:'true'},
        {reference : 100618, name:'HP 65', price:64,image:"ink.jpg",available:'false'},
        {reference : 107778, name:'HP OMEN', price:1155,image:"omen.jpg",available:'true'},
        {reference : 163322, name:'Hisense 32-Inch', price:139,image:"hisense.png",available:'true'},
        {reference : 100616, name:'Music Computing Motion command 84', price:9999,image:"computing.jpg",available:'true'},
        {reference : 144464, name:'Spy Optic Hi-Fi', price:90,image:"spy.jpg",available:'true'},
        {reference : 184135, name:'FANGOR 12 Inch Portable', price:245,image:"fangor.jpg",available:'true'},
    ]
    return (
        <>
        <div className='container row'>
            <Products produits = {products}/>
        </div>
        </>
    );
}

export default App;