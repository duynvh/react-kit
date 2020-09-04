import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const ProductPage = (props) => {
  const [products, setProducts] = React.useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _page: 1,
        _limit: 10,
      };
      const response = await props.getList(params);
      setProducts(response);
    }
    
    fetchProducts();
  }, []);

  return (
    <div>
      
    </div>
  )
}

ProductPage.propTypes = {
  getList: PropTypes.func,
  getDetail: PropTypes.func,
  list: PropTypes.array,
  detail: PropTypes.object,
};

export default ProductPage;