// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './home.css'
import Header from '../../components/Header/header'
import ExploreMenu from '../../components/exploreMenu/exploreMenu'
import FoodDisplay from '../../components/foodDisplay/foodDisplay'
import { useActionData } from 'react-router-dom'
import AppDownload from '../../components/AppDownload/AppDownload'
const home = () => {

  const [category,setCategory] = useState("All");

  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload />
    </div>
  )
}

export default home
