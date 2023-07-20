import React from 'react'

import Block from '../../../../components/Block/Block'
import SideMenu from '../../../../components/SideMenu/SideMenu'
import CategoryLink from '../../../../components/CategoryLink/CategoryLink'
import { categoryMenu } from '../../../../db/categoryMenu'
import CardProduct from '../../../../components/CardProduct/CardProduct'
//----------------------------------------------------------------------------
const GoodsBlock = () => {
  const filteredBlockMenuCategories = categoryMenu.filter(
    (category) => category.menu === 'block2'
  )

  return (
    <Block>
      <SideMenu titleText={'Best Selling Products'} buttonText={'More products'}>
        {filteredBlockMenuCategories.map((category) => (
          <CategoryLink key={category.id} linkName={category.categoryName} />
        ))}
      </SideMenu>
      <CardProduct productTitle='Hello' productDescription='Atque doloremque praesentium ab aspernatur similique amet.' productPrice='12.32' />
      <CardProduct productTitle='Hello' productDescription='Atque doloremque praesentium ab aspernatur similique amet.' productPrice='12.32' discount={12} />
      <CardProduct productTitle='Hello' productDescription='Atque doloremque praesentium ab aspernatur similique amet.' productPrice='12.32' />
    </Block>
  )
}

export default GoodsBlock
