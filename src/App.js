
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   BrowserRouter
// } from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light') // whether dark mpde is enable or not
  const [alert, setalert] = useState(null)

  const showAlert = (message, type) =>{
    setalert({
      msg: message,
      type:type
    })

    setTimeout(() => {
      showAlert(null);
    }, 2000);
  }

  const toggleMode=()=>{
  if(mode==='light'){
    setmode('dark')
    document.body.style.backgroundColor = 'grey';
    showAlert('Dark mode has been enabled', 'success');
    document.title= 'Textutlis - Dark mode'
  }
  else{
    setmode('light');
    document.body.style.backgroundColor = 'white'
    showAlert('light mode has been enabled', 'success');
    document.title= 'Textutlis - Light mode'
  }
}
  return (
    <>
    
     {/* <Navbar title="TextUtlis"  about="About TextUtilis" /> */}
     {/* <Router> */}
     <Navbar title="TextUtlis" mode={mode} toggleMode={toggleMode}  />
     <Alert alert={alert}/>
     <div className="container my-3">
      {/* <Routes>
          <Route exact path="/about" element={<About/>}/>
            
      </Routes>
      <Routes>
          
          <Route exact path="/" */}
        {<TextForm  showAlert={showAlert} heading="Enter text" mode={mode}/>}
      {/* </Routes> */}
     </div>
    {/* </Router> */}
    </>
    
  );
}

export default App;
