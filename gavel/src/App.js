import React from 'react';
import './App.css';
import Header from './Header/Header';
import Breadcrumb from './Breadcrumb/Breadcrumb';
import Tabbar from './Tabbar/Tabbar';
import Showcomponent from './Show-component/Show-component';
// import homepage from '../src/homepage';

function App() {
  return (
    <>
    <Header/>
    <Breadcrumb/>
    <Tabbar/>
    <Showcomponent/>
    {/* <homepage /> */}
    </>
  );
}

export default App;
