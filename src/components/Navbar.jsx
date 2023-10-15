import React from 'react'
import bgImg from '../images/IMG_4135.png'
import moon from '../images/full-moon.png'
const Navbar = () => {
  return (
    <div className='min-h-[8vh] md:min-h-[10vh] flex items-center bg-cover bg-center  bg-no-repeat' style={{backgroundImage : `url(${bgImg})`}}>
        <nav className='max-w-7xl mx-auto  w-full px-5 flex py-5 items-center gap-4'>
            <img src={moon} className=' w-16' alt="" />
            <div>
                <ul className='flex gap-5'>
                    <li className='text-white font-lexend'><a href="#about">About</a></li>
                    <li className='text-white font-lexend'><a href="#projects">Projects</a></li>
                    <li className='text-white font-lexend'><a href="#about">Contact</a></li>
                   
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar