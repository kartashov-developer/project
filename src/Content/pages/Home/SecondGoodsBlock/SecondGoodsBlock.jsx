import React from 'react';

import Block from '../../../../components/Block/Block';
import SideMenu from '../../../../components/SideMenu/SideMenu';
import CategoryLink from '../../../../components/CategoryLink/CategoryLink';
import { categoryMenu } from '../../../../db/categoryMenu';
import CardProduct from '../../../../components/CardProduct/CardProduct';

import { products } from '../../../../db/products';
//----------------------------------------------------------------------------
const SecondGoodsBlock = () => {
  const filteredBlockMenuCategories2 = categoryMenu.filter(
    (category) => category.menu === 'block3'
  );

  return (
    <Block>
      <SideMenu titleText={'Best from Farmers'} buttonText={'More products'}>
        {filteredBlockMenuCategories2.map((category) => (
          <CategoryLink key={category.id} linkUrl={`/tags/${category.categoryName}`}>
            {category.categoryName}
          </CategoryLink>
        ))}
      </SideMenu>
      {products.filter(product => {
        return product.type === 'block2'
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

export default SecondGoodsBlock;
