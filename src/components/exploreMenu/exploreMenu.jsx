// eslint-disable-next-line no-unused-vars
import React from 'react'
import './exploreMenu.css'
import { menu_list } from '../../assets/assets'
const exploreMenu = ({category, setCategory}) => {
  return (
    <div className='exploreMenu' id='exploreMenu'>
        <h1>Explore Menu</h1>
        <p className='exploreMenuText'>Discover a diverse selection of dishes on our menu. From appetizers to desserts, explore delicious options tailored to satisfy every craving and delight your taste buds.</p>
        <div className="exploreMenuList">
            {menu_list.map((item, index)=>{
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='exploreMenuListItem'>
                        <img className= {category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>

  )
}

export default exploreMenu
