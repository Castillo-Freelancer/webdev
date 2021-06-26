import React from 'react';
 
import './App.css';
import Header from './componentes/Header';
import Main from './componentes/Main';
 
import Footer from './componentes/Footer';

function App() {
  return (
    <React.Fragment>
      <Header />      
      <Main />      
      <Footer />
    </React.Fragment>
  );
}

export default App;
