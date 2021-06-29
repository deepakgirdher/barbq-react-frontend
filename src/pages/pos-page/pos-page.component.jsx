import React, { useState, useEffect } from 'react'
import CategoryList from '../../components/category-list/category-list.component';
import Bill from '../../components/bill/bill.component';
import ItemList from '../../components/item-list/item-list.component';
import OrderTypeBar from '../../components/order-type-bar/order-type-bar.component';
import { MenuData } from './menu.data';
import './pos-page.styles.scss';

const PosPage = () => {
  const [menuData, setMenuData] = useState(MenuData);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [menuList, setMenuList] = useState(null);
  const [categoryList, setCategoryList] = useState(null);

  useEffect(() => {
    loadCategoryList();
    changeCategory(1);
  }, [])

  const loadCategoryList = () => {
    let catList = [];
    menuData.forEach(catItem => catList.push({ categoryId: catItem.categoryId, categoryName: catItem.categoryName }));
    console.log("List is:", catList);
    setCategoryList(catList);
  }
  const changeCategory = (newCategory) => {
    let selMenu = menuData.filter(menu => newCategory === menu.categoryId);
    if (selMenu.length > 0) {
      setSelectedCategory(newCategory);
      setMenuList(selMenu[0].menuItems);
    }
  }


  return (
    <div className="pos-container">
      <CategoryList categoryList={categoryList} selectedCategory={selectedCategory} changeCategory={changeCategory} />
      <div>
        <OrderTypeBar />
        {menuList ? <ItemList menuItems={menuList} /> : <div className="item-list-area">Select a category from the menu.</div>}
      </div>
      <Bill />
    </div>
  )
}


export default PosPage;