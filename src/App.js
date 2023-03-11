import React from 'react';
import './App.css';
import NavBar from "./components/Navbar"
import Hero from "./components/Hero"
import Service from './components/Service';
import Footer from './components/Footer';
import Sign from './components/Sign';
import dataFile from './components/dataFile';
import Gap from './components/Gap';
const cards= dataFile.map(item => {
  return (
      <Service
         
          {...item}
          
      />
  )
})    


function App() {

  return (
    

    <div className="App">
        <NavBar/>
        <Hero/>
        <Sign/>
        <Gap/>
        <section className="cards-list">
                {cards}

            </section>
        <Footer/>
      </div>
    
  );
  
}


export default App;
