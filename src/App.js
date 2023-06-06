//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

//let name="Deeksha";
function App() {
  return (
    <>
      
  <Navbar title="Text Utils" aboutTit="About"/>
  {/* props being passed here */}
  <div className="container my-3">
    <TextForm heading="Enter the text for analysis"/>
  </div>
    </>
  );
  
}

export default App;
