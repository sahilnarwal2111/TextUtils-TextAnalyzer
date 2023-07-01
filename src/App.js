// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { Component, useState } from 'react'
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setmode] = useState('light')
  const [alert, setalert] = useState(null)
  const showAlert=(message, type)=>{
      setalert({
        msg : message,
        type: type
      })
      setTimeout(() => {
        setalert(null)
      }, 1500);
    }
  const toggleMode =()=>{
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor = '#063883'
      showAlert("Dark Mode has enabled", "success")
      document.title = 'TextUtils DarkMode'
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has enabled", "success")
      document.title = 'TextUtils LightMode'
    }
  }
  const setLightMode =()=>{
      setmode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has enabled", "success")
      document.title = 'TextUtils LightMode'
    }
  
  const setBlueMode =()=>{
    setmode('dark')
      document.body.style.backgroundColor = '#002354'
      showAlert("Blue Mode has enabled", "success")
      document.title = 'TextUtils Blue Mode'
  }
  const setGreenMode =()=>{
    setmode('dark green')
      document.body.style.backgroundColor = '#023c03'
      showAlert("Green Mode has enabled", "success")
      document.title = 'TextUtils Green Mode'
  }
  return (
    <>
    <Router>
      <Navbar title = "TextUtils" about = "About TextUtils" mode = {mode}  toggleMode={toggleMode} setBlueMode={setBlueMode} setGreenMode={setGreenMode} setLightMode={setLightMode}/>
      <Alert alert = {alert} />
      {/* <About/> */}
      <div className="container">
      {/* <TextForm showAlert= {showAlert} mode = {mode} /> */}
           <Routes>
             <Route path="/about" element={<About mode = {mode} />}>
            </Route> 
             <Route path="/" element={<TextForm showAlert= {showAlert} mode = {mode} />}> 
             </Route> 
          </Routes> 
      </div>
    </Router>
    </>
  );
  }

export default App;
