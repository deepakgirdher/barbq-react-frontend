import React from 'react';
import './category-list.styles.scss'

class CategoryList extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [
        { catId: 1, name: 'Starters' },
        { catId: 2, name: 'Main Course' },
        { catId: 3, name: 'Indian Breads' },
        { catId: 4, name: 'Rice' },
        { catId: 5, name: 'Desserts' },
        { catId: 6, name: 'Salads & Raita' },
        { catId: 7, name: 'Beverages' }

      ]
    }
  }
  render() {
    return (
      <div className="category-list-container">
        <div className="menu-title">MENU</div>
        {
          this.state.categories.map(category => (
            <div key={category.catId} className="category-item"><span>{category.name}</span></div>
          ))
        }
      </div>
    )
  }
}

export default CategoryList;