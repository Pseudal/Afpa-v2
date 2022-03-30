import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import logo from './img/logo192.png'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

function App() {
  let age = 18;
  let bool = false;
  const jours = ["Lundi","Mardi", "Mercredi", "Jeudi", "Vendredi"]; 
  return (
  <div className='container'>
    <div id='csstest' className="">
      <img src={logo} alt="" />
      <Header prop_age = {age} />
      <h1>Hello React</h1>
      <p>Etude du React</p>
      <p>{bool ? <strong>homme</strong> : <em>femme</em>}</p>

      <Footer prop_day = {jours} />
    </div>  
  </div>
  );
}

export default App;
