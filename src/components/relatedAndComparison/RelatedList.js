import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import PropTypes from 'prop-types';



function RelatedList(props) {
  console.log('test in relatedList', props.productInfo);
  return (
    <div>
      {props.productInfo.map((product) => {
        return (
          <ProductCard product={product}/>
        )
      })}
    </div>



  )
}


RelatedList.propTypes = {
  relatedProducts: PropTypes.instanceOf(Array).isRequired,
  // productInfo: PropTypes.instanceOf(Array).isRequired,
};


export default RelatedList;