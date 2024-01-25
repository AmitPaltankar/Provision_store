import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../service/api';
import { Card, CardContent, Typography, TextField  } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import './login.css'

const ProductListPage = ({ accessToken }) => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searched, setSearchedTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const productList = await fetchProducts(accessToken);
        console.log('productList', productList)
        setProducts(productList.response);
      } catch (error) {
        console.error('Error fetching product list:', error);
      }
    };

    fetchProductList();
  }, [accessToken]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    console.log('products2342343424',products)
    setSearchedTerm(searchTerm);
  };

  return (
    <div>
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '10px'}}>
        <h2>Product List</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center'}}>
            <div className='about' style={{margin: '16px 10px 0 0'}} onClick={() => navigate('/about')}>About</div>
            <form onSubmit={handleSearchSubmit} style={{display: 'flex', alignItems: 'center'}}>
                <TextField
                label="Search by product name"
                value={searchTerm}
                onChange={handleSearchChange}
                onKeyDown={(event) => {
                    if(event.target.key === 'Enter') {
                        handleSearchChange()       
                    }
                }}
                />
                {/* <button type="submit" style={{backgroundColor: 'cornflowerblue', borderRadius: '3px'}}>Search</button> */}
            </form>

        </div>
    </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map((product) => (
          product.productCategory.productCategoryName.toLowerCase().includes(searched.toLowerCase()) && <Card key={product.id} style={{ width: '300px', margin: '20px' }}>
            <CardContent>
              <Typography variant="h6">{product.productCategory.productCategoryName}</Typography>
              <img src={product.productCategory.productCategoryImage} alt="Logo" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
