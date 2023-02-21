import React from 'react';
import './App.css';
import Content from './component/Content/Content';
import Navbar from './component/Navbar/Navbar';
import Navbar2 from './component/Navbar/Navbar2';
import Section2 from './component/Section2/Section2';
import ServiceArray from './component/ServicesArray/ServiceArray';
import VendorList from './component/VendorListContainer/VendorList';

function App() {
  return (
    <div className="App">
     <div className='banner'>
      <Navbar />
      <Content />
     </div>
     <Section2 />
     <ServiceArray />
     <VendorList />
     <Navbar2 />
    </div>
  );
}

export default App;
