import React from 'react';

import Block from '../../../../components/Block/Block';
import SideMenu from '../../../../components/SideMenu/SideMenu';
import CategoryLink from '../../../../components/CategoryLink/CategoryLink';
import Banner from '../../../../components/Banner/Banner';

import { categoryMenu } from '../../../../db/categoryMenu';
import { blogLoremIpsum } from '../../../../db/blogLoremIpsum';
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
            <CategoryLink key={category.id} linkUrl={`/categories/${category.categoryName}`}>
              {category.categoryName}
            </CategoryLink>
          ))}
        </SideMenu>
        <Banner
          title={blogLoremIpsum[3].blogTitle}
          backgroundImage={blogLoremIpsum[3].backgroundImage}
          author={blogLoremIpsum[3].author}
        />
        <Banner
          title={blogLoremIpsum[2].blogTitle}
          backgroundImage={blogLoremIpsum[2].backgroundImage}
          author={blogLoremIpsum[2].author}
        />
      </Block>
    </>
  );
};

export default CategoryMenu;
