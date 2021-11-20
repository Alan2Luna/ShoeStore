import { useState, useEffect } from 'react';
import axios from 'axios';

const useProducts = () => {
  const [products, setProducts] = useState(null);

  const getProducts = async () => {
    try {
      const res = await axios.get('http://localhost:3000/products');
      console.log(res);
      return res;
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const data = getProducts();
    setProducts(data);
  }, []);

  return products;
};

export default useProducts;
