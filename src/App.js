//import logo from './logo.svg';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react'

//let name="Deeksha";
function App() {
  const [mode, setMode] = useState('light');//Whether dark mode is enabled or not
  const toggleMode=() =>
  {
    if(mode==='light')
      {
        setMode('dark');
        setBtnText("Enable Light mode");
        document.body.style.backgroundColor='#042743';
      }
    else
    {
      setMode ('light');
      setBtnText("Enable Dark mode");
      document.body.style.backgroundColor='white';
    }
  }
  const [modeText, setBtnText] = useState("Enable Dark mode");
  return (
    <>
      
  <Navbar title="Text Utils" aboutTit="About" mode={mode} toggleMode={toggleMode} modeText={modeText}/>
  {/* props being passed here */}
  <div className="container py-2" >
    <TextForm heading="Enter the text for analysis" mode={mode}/>
    {/* <About/> */}
  </div>
    </>
  );
  
}

export default App;
