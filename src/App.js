import './App.css';
import "./components/quoteBox.css"
import { Footer } from './Footer';
import ButtonLayout from './components/ButtonLayout';
import InputLayout from './components/InputLayout';
import {GlobalProvider} from './GlobalState'
import { Header } from './Header';

function App() {
  
  return (
    
      <div className='body'>
    
        <Header/>

        <GlobalProvider>  
          <div className='card'>
              <InputLayout/>
              <ButtonLayout />
          </div>

        </GlobalProvider>

        <br></br>
        <Footer/>
          
      </div>


    
  );
}

export default App;
