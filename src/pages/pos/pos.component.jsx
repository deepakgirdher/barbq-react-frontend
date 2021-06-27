import React from 'react'
import CategoryList from '../../components/category-list/category-list.component';
import Bill from '../../components/bill/bill.component';
import ItemList from '../../components/item-list/item-list.component';
import './pos.styles.scss';

const POS = () => (
  <div className="pos-container">
    <CategoryList />
    <ItemList />
    <Bill />
  </div>
)


export default POS;