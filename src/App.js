import logo from './logo.svg';
import './App.css';
import Hello1 from './Hello';
import React from "react";
import HelloArrow1 from './HelloArrow';
import MobileOS from './MobileOS';
import MobileManufacturers from './MobileManu';
import Structure from './StructPara';
import StructPicture from './StructPic';
import Blue from './StructureBlue';
import Myname from './Name';
function App() {
  return (
  
    <>
    <Hello1/>
    <HelloArrow1/>
    <MobileOS />
   
    <MobileManufacturers/>
    <Structure/>
    <StructPicture/>
    <Blue/>
    <Myname user="Supriya"/>
    </>
  );
}

export default App;
