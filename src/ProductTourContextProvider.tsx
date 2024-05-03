import React, { createContext, useCallback, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductTourType } from './components/productTour.types';

interface ProductTourContextProps {
  productTours: ProductTourType[];
  markTourAsDone: (slug: string) => void;
}

export const ProductTourContext = createContext<ProductTourContextProps>({
  productTours: [],
  markTourAsDone: () => { },
});

const ProductTourContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [productTours, setProductTours] = useState<ProductTourType[]>([
    { slug: 'homeTour', isDone: false },
    { slug: 'dashboardTour', isDone: false },
    { slug: 'aboutTour', isDone: false },
  ]);

  const markTourAsDone = useCallback((slug: string) => {
    console.log('Bloom ~ file: ProductTourContextProvider.tsx:24 ~ markTourAsDone ~ slug:', slug)
    setProductTours((prevState) => prevState.map((tour) => (tour.slug === slug ? { ...tour, isDone: true } : tour)));
  }, []);

  return <ProductTourContext.Provider value={{ productTours, markTourAsDone }}>{children}</ProductTourContext.Provider>;
};

export default ProductTourContextProvider;
