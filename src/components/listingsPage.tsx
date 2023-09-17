import React, { useState, useEffect } from 'react';
import { Product } from '../types/product';
import data from '../data/mockApiReponse.json';
import ProductNavigator from './productNavigator';
import './listingPage.css';
import Header from './pageHeader';

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
      <Header/>
      <div className="banner">
        <div className="banner-content">
          <h1>Explore the New BMW i4 Range</h1>
          <p>From the cool trend and SUV inspired active to the sport ST-line, the eighth generation fiesta impressed across the range</p>
        </div>
        <img
          src={process.env.PUBLIC_URL + '/images/Hero banner.jpg'}
          alt="Banner"
          className="banner-image"
        />
        <button className="book-button">Book Now</button>
      </div>

      <div className="listing-page">
        {products.length === 0 ? (
          <p className="empty-message">Products are empty</p>
        ) : (
          <ProductNavigator products={products} />
        )}
      </div>
      <div className="banner">
        <div className="banner-content">
          <h1>Explore the New BMW interior</h1>
          <p>Lorem ipsum dolor sit amet, constecteur adipiscing elit, sed do eiusmod tempor incididunt ut labore et magna aliqua</p>
        </div>
        <img
          src={process.env.PUBLIC_URL + '/images/Interior.jpg'}
          alt="Banner"
          className="banner-image"
        />
        <button className="book-button">Book Now</button>
      </div>
    </div>
  );
};

export default ListingPage;
