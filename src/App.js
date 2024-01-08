import products from './components/products';

import './App.css';
import Store from './components/Store';

function App() {

  return (
    <>
      <Store products={products} view="view-module"/>
    </>
  );
}

export default App; 
