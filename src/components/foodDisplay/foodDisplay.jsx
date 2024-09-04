// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import './foodDisplay.css'
import FoodItem from '../foodItem/foodItem'
import { StoreContext } from '../context/StoreContext'
const foodDisplay = ({category}) => {

    const {food_list} = useContext(StoreContext);

  return (
    <div className='foodDisplay' id='foodDisplay'>
        <h2>Top Dishes</h2>
        <div className="foodDisplayList">
            {food_list.map((item, index)=>{
                if (category==="All" || category===item.category) {
                    return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
                }
            })}
        </div>
    </div>
  )
}

export default foodDisplay