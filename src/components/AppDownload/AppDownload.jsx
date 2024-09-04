// eslint-disable-next-line no-unused-vars
import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='AppDowload' id='AppDownload'>
        <p>For Better Experience Download <br /> Foodie App</p>
        <div className="appDowloadPlatforms">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default AppDownload