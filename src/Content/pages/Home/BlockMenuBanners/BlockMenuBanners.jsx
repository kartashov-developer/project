import React from 'react';

import Block from '../../../../components/Block/Block';
import SideMenu from '../../../../components/SideMenu/SideMenu';
import CategoryLink from '../../../../components/CategoryLink/CategoryLink';
import { categoryMenu } from '../../../../db/categoryMenu';
import Banner from '../../../../components/Banner/Banner';
//----------------------------------------------------------------------------
const CategoryMenu = () => {
  // Filter the category menu. I need menu: 'block1'.
  const filteredBlockMenuCategories = categoryMenu.filter(
    (category) => category.menu === 'block1'
  );

  return (
    <>
      <Block>
        <SideMenu buttonText={'More categories'} titleText={'Category Menu'}>
          {filteredBlockMenuCategories.map((category) => (
            <CategoryLink key={category.id} linkUrl={'/404'}>
              {category.categoryName}
            </CategoryLink>
          ))}
        </SideMenu>
        <Banner />
        <Banner />
      </Block>
    </>
  );
};

export default CategoryMenu;
