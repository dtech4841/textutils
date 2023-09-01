
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import Table from './components/Table';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500
    );
  }

  const toggleMode = (cls) => {
    console.log(cls);
    document.body.removeAttribute('class');
    document.body.classList.add('bg-'+cls);

    if (mode === 'light') {
      
      setMode('dark');
      document.body.style.background = cls;
      showAlert('Dark mode is enabled', 'success');
      document.title = 'Dark mode is enabled';
    } else {
      setMode('light');
      document.body.style.background = '#fff';
      showAlert('Light mode is enabled', 'success');
      document.title = 'Light mode is enabled';
    }
  }
  return (
    <>
      <Router>
        <Navbar title='EMumbai' about="About Us" contact="Contact" mode={mode} changemode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/about" element={<About mode={mode}/>}>
            
          </Route>
          <Route path="/" element={<TextArea heading="Please Enter the Text" mode={mode} showAlert={showAlert} />} />
            
        
        </Routes>
      </Router>
      

    </>
  );
}

export default App;
