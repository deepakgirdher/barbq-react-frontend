import React from 'react'
import CategoryList from '../../components/category-list/category-list.component';
import Bill from '../../components/bill/bill.component';
import ItemList from '../../components/item-list/item-list.component';
import './pos-page.styles.scss';

class PosPage extends React.Component {
  constructor() {
    super();
    this.state = {
      menuItems: [
        {
          menuId: 1,
          name: 'Paneer Tikka Masala',
          price: 250,
          isVeg: true
        },
        {
          menuId: 2,
          name: 'Tandoori Paneer Malai Tikka',
          price: 250,
          isVeg: true
        },
        {
          menuId: 3,
          name: 'Murg Tikka Masala',
          price: 300,
          isVeg: false
        },
        {
          menuId: 4,
          name: 'Veg Chilli',
          price: 200,
          isVeg: true
        },
        {
          menuId: 5,
          name: 'Hara Bhara Kabab',
          price: 200,
          isVeg: true
        },
        {
          menuId: 6,
          name: 'Chicken 65',
          price: 350,
          isVeg: false
        },
        {
          menuId: 7,
          name: 'Gobi Manchurian',
          price: 150,
          isVeg: true
        },
        {
          menuId: 8,
          name: 'Tandoori Chicken',
          price: 400,
          isVeg: false
        },
        {
          menuId: 9,
          name: 'Potato Wedges',
          price: 200,
          isVeg: true
        }
      ]
    }
  }
  render() {
    return (
      <div className="pos-container">
        <CategoryList />
        <ItemList menuItems={this.state.menuItems} />
        <Bill />
      </div>
    )
  }
}


export default PosPage;