import React from 'react';

function ProductCard({ name, price, image, discount }) {
  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      <h3>{name}</h3>
      <p style={styles.price}>₹{price.toFixed(2)}</p>
      {discount !== undefined && (
        <span style={styles.discountBadge}>{discount}% OFF</span>
      )}
    </div>
  );
}

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  discount: PropTypes.number,
};

const styles = {
  app: {
    padding: '20px',
    fontFamily: 'Arial',
    backgroundColor: '#f9f9f9',
  },
  grid: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
  },
  card: {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '16px',
    width: '250px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    textAlign: 'center',
    position: 'relative',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  price: {
    fontWeight: 'bold',
    fontSize: '1.2rem',
    margin: '8px 0',
  },
  discountBadge: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: '#ff4757',
    color: 'white',
    padding: '4px 8px',
    borderRadius: '6px',
    fontSize: '0.8rem',
  },
};

function App() {
  const products = [
    {
      name: 'iPhone 14 Pro',
      price: 129999,
      image: 'https://via.placeholder.com/250x180?text=iPhone+14+Pro',
      discount: 10,
    },
    {
      name: 'Samsung Galaxy S22',
      price: 99999,
      image: 'https://via.placeholder.com/250x180?text=Galaxy+S22',
    },
    {
      name: 'OnePlus 11R',
      price: 49999,
      image: 'https://via.placeholder.com/250x180?text=OnePlus+11R',
      discount: 5,
    },
  ];

  return (
    <div style={styles.app}>
      <h1>Featured Products</h1>
      <div style={styles.grid}>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
            image={product.image}
            discount={product.discount}
          />
        ))}
      </div>
    </div>
  );
}


