import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Nav from './components/Nav';

function App() {
  return (
    <div className="main">
      <div className='head'>
        <Nav />  
      </div>
      <div className='Body'>
        <Body />
      </div>
      <div className="head" >
        <Footer />
      </div>
    </div>
  );
}

export default App;
