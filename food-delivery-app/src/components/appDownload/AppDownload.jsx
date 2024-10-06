import React from 'react'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='flex flex-col gap-8 items-center text-center mt-32'>
        <p className='font-semibold text-4xl'>For Better Experience Download <br/> Tomato App</p>
        <div className='flex flex-row gap-4 '>
            <img className="max-w-52 cursor-pointer hover:transform hover:scale-105 transition-transform duration-300" src={assets.play_store} alt="" />
            <img className="max-w-52 cursor-pointer hover:transform hover:scale-105 transition-transform duration-300" src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default AppDownload