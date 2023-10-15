import React from 'react';

import Block from '../../../../components/Block/Block';
import SideMenu from '../../../../components/SideMenu/SideMenu';
import CategoryLink from '../../../../components/CategoryLink/CategoryLink';
import { categoryMenu } from '../../../../db/categoryMenu';
import CardProduct from '../../../../components/CardProduct/CardProduct';
import { Link, Navigate } from 'react-router-dom';

import { products } from '../../../../db/products';
//----------------------------------------------------------------------------
const GoodsBlock = () => {
  const filteredBlockMenuCategories = categoryMenu.filter(
    (category) => category.menu === 'block2'
  );

  return (
    <Block>
      <SideMenu
        titleText={'Best Selling Products'}
        buttonText={'More products'}
      >
        {filteredBlockMenuCategories.map((category) => (
          <CategoryLink key={category.id} linkUrl={`/categories/${category.categoryName}`}>
            {category.categoryName}
          </CategoryLink>
        ))}
      </SideMenu>
      {products.filter(product => {
        return product.type === 'block1'
      }).map((product, index) => (
        <CardProduct
          key={index}
          productTitle={product.title}
          productDescription={product.description}
          productPrice={product.price}
          backgroundImage={product.backgroundImage}
          discount={product.discount}
        />
      ))}
    </Block>
  );
};

export default GoodsBlock;
