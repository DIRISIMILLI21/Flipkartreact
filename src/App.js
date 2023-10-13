// import logo from './logo.svg';
import './App.css';
import Searchbar from './components/Searchbar.js'
import Menu from './components/Menu.js'
import  Banner from './components/Banner.js';
import Products from './components/Products.js';
import './css/bootstrap.css'
import  Form from './components/form.js';

function App() {
  return (
   <>
   <div className='container-fluid'>
        <div className='row'>
                <Searchbar/>
                <Menu/>
                <Banner/>
                <Products/>
                <Form/>
                
        </div>
   </div>
   </>
  );
}

export default App;
