import React from 'react';
import './App.css';
import Header from './Header/Header';
import Breadcrumb from './Breadcrumb/Breadcrumb';
import Tabbar from './Tabbar/Tabbar';
import Featured from './Featured/Featured';


function App() {
  return (
    <>
    <Header/>
    <Breadcrumb/>
    <Tabbar/>
    <Featured />
    
    </>
  );
}

export default App;
