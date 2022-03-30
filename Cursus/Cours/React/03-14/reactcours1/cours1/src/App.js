import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
  <>
    <div id='csstest' className="">
      <Header />
      <h1>Hello React</h1>
      <p>Etude du React</p>
      <img width={256} src="./img/logo512.png" alt="logo512" />
      <Footer />
    </div>  
  </>
  );
}

export default App;
