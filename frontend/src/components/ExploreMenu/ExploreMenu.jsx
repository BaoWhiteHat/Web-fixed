import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Oil Lists</h1>
      <p className='explore-menu-text'> Oil lists for motorbikes specify the correct oil type and viscosity for different models, ensuring optimal engine performance, protection, and longevity. Consulting these lists is crucial for maintaining your bike's health and preventing costly engine damage. </p>
      <div className="explore-menu-list">
      {menu_list.map((item, index)=> {
        return (
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                <p>{item.menu_name}</p>
            </div>
        )
      })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
