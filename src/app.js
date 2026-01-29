import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer mensaje="¡Bienvenido a mi e-commerce!" />
    </div>
  );
};

export default App;