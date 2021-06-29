import React, { useState } from 'react';
import './category-list.styles.scss'

const CategoryList = ({ categoryList, selectedCategory, changeCategory }) => {

  return (
    <div className="category-list-container">
      <div className="menu-title">MENU</div>
      {categoryList ?
        categoryList.map(category => (
          <div key={category.categoryId} className={'category-item' + (selectedCategory === category.categoryId ? ' active-category' : '')} onClick={() => { changeCategory(category.categoryId) }}><span>{category.categoryName}</span></div>
        ))
        :
        <div>Loading...</div>
      }
    </div>
  )
}

export default CategoryList;