import React, { useState, useEffect } from 'react';
import { Product } from '../types/product';
import data from '../data/mockApiReponse.json';
import ProductNavigator from './productNavigator';
import './listingPage.css';

const ListingPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
        <div className="listing-page">
          {products.length === 0 ? (
            <p className="empty-message">Products are empty</p>
          ) : (
            <ProductNavigator products={products} />
          )}
        </div>
      </div>
  );
};

export default ListingPage;
