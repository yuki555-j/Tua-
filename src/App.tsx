import React from 'react';
import './App.css';
import ProductTour from './components/ProductTour';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductTourContextProvider from './ProductTourContextProvider';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <ProductTour>
          <ProductTourContextProvider>
            <Main />
          </ProductTourContextProvider>
        </ProductTour>
      </BrowserRouter>
    </div>
  );
}

export default App;
