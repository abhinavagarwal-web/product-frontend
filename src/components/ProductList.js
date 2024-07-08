import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Filters from './Filters';

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({ minPrice: '0', maxPrice: '5000', color: '', size: '', search: '' });

  useEffect(() => {
    axios.get('http://localhost:8000/products')
      .then(response => {
        setProducts(response.data);
        setFilteredProducts(response.data);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  useEffect(() => {
    let filtered = products;

    if (filters.minPrice) {
      filtered = filtered.filter(product => product.price >= filters.minPrice);
    }
    if (filters.maxPrice) {
      filtered = filtered.filter(product => product.price <= filters.maxPrice);
    }
    if (filters.color) {
      filtered = filtered.filter(product => product.color === filters.color);
    }
    if (filters.size) {
      filtered = filtered.filter(product => product.size === filters.size);
    }
    if (filters.search) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [filters, products]);

  return (
    <div className="flex">
      <Filters filters={filters} setFilters={setFilters} />
      <div className="flex-1 p-4 ml-64">
        <h1 className="text-2xl font-bold mb-4">Products</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map(product => (
                     <div key={product.id} className="group relative">
                     <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                       <img
                         src={product.imagePath}
                         className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                       />
                     </div>
                     <div className="mt-4 flex justify-between">
                       <div>
                         <h3 className="text-sm text-gray-700">
                           <a href={product.href}>
                             <span aria-hidden="true" className="absolute inset-0" />
                             {product.name}
                           </a>
                         </h3>
                         <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                       </div>
                       <p className="text-sm font-medium text-gray-900">₹{product.price}</p>
                     </div>
                   </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductsList;
