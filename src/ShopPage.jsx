import { useState, useEffect } from 'react';
import './App.css';

function ShopPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://store-zzdnzaau.saleor.cloud/graphql/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `{
              products(first:100,channel:"channel-pln") {
                edges {
                  node {
                    id
                    name
                    description
                    slug
                    thumbnail {
                      url
                    }
                    pricing {
                      priceRange {
                        start {
                          gross {
                            amount
                            currency
                          }
                        }
                      }
                    }
                    category {
                      name
                      slug
                    }
                  }
                }
              }
            }`
          })
        });
        
        const data = await response.json();
        setProducts(data.data.products.edges.map(edge => edge.node));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Function to generate random rating (1-5)
  const generateRandomRating = () => {
    return (Math.random() * 4 + 1).toFixed(1);
  };

  // Function to generate random number of reviews
  const generateRandomReviews = () => {
    return Math.floor(Math.random() * 100);
  };

  if (loading) {
    return <div className="loading">Loading products...</div>;
  }

  return (
    <div className="shop-container">
      <h1 className="shop-title">Our Products</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              <img 
                src={product.thumbnail?.url || 'https://via.placeholder.com/256'} 
                alt={product.name} 
                className="product-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/256';
                }}
              />
            </div>
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <div className="product-category">{product.category?.name || 'Uncategorized'}</div>
              <div className="product-rating">
                <span className="stars">★★★★★</span>
                <span className="rating-value">{generateRandomRating()}</span>
                <span className="review-count">({generateRandomReviews()} reviews)</span>
              </div>
              <div className="product-price">
                {product.pricing?.priceRange?.start?.gross?.amount 
                  ? `${product.pricing.priceRange.start.gross.amount} ${product.pricing.priceRange.start.gross.currency}`
                  : 'Price not available'}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopPage;