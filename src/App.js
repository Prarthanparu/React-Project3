import Details from './Components/Details';
import Form from './Components/Form';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Details/>
      <p>Please Provide Following Details for Web Check in</p>
      <Form/> 
      <Footer/>
    </div>
  );
}

export default App;
