import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ price, inventory, title }) => (
  <div>
    {title} - &#36;{price}{inventory ? ` x ${inventory}` : null}
  </div>
);

Product.propTypes = {
  price: PropTypes.number.isRequired,
  inventory: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default Product;
