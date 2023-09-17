import React, { useState, useRef } from 'react';
import './productNavigator.css';
import { Product } from '../types/product';
import { Button } from 'react-bootstrap';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'; // Import the Font Awesome icons
type ScrollDirection = 'prev' | 'next';

interface ProductNavigatorProps {
  products: Product[];
}

const ProductNavigator: React.FC<ProductNavigatorProps> = ({ products }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (scrollDirection: ScrollDirection) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cardWidth = container.clientWidth;
    const maxIndex = products.length - 1;

    if (scrollDirection === 'prev' && currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      container.scrollLeft -= cardWidth;
    } else if (scrollDirection === 'next' && currentCardIndex < maxIndex) {
      setCurrentCardIndex(currentCardIndex + 1);
      container.scrollLeft += cardWidth;
    }
  };

  return (
    <div className="product-navigator-container">
      <div className="left-arrow-container">
        {currentCardIndex === 0 ? (
          <Button variant="light" className="arrow-button" disabled>
            <FaArrowCircleLeft /> {/* Left arrow */}
          </Button>
        ) : (
          <Button
            variant="light"
            className="arrow-button"
            onClick={() => handleScroll('prev')}
          >
            <FaArrowCircleLeft />  
          </Button>
        )}
      </div>
      <div className="product-list" ref={scrollContainerRef}>
        {products.map((product, index) => (
          <div
            key={index}
            className={`product-card ${
              index === currentCardIndex ? 'centered' : 'blurred'
            }`}
          >
            <div className="product-image">
              <img src={process.env.PUBLIC_URL + '/images/' + product.image} alt={product.name} />

            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <div className="price-container">
                <p className="product-price">
                  <span className="product-price">
                    From £{product.price}
                  </span>
                </p>
              </div>
              <div className="product-features">
                <ul>
                  {product.features.map((feature: string, index: number) => (
                    <li className='product-navigator-li' key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="right-arrow-container">
        {currentCardIndex < products.length - 1 ? (
          <Button
            variant="light"
            className="arrow-button"
            onClick={() => handleScroll('next')}
          >
            <FaArrowCircleRight />  
          </Button>
        ) : (
          <Button variant="light" className="arrow-button" disabled>
            <FaArrowCircleRight />  
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductNavigator;
