import React from 'react'
import bgImg from '../images/IMG_4135.png'
import moon from '../images/full-moon.png'
const Navbar = () => {
  return (
    <div className='min-h-[8vh] md:min-h-[10vh] flex  '>
        <nav className='max-w-7xl mx-auto  w-full flex pb-14 md:px-3 pt-5 items-center gap-6'>
            <img src={moon} className=' w-14' alt="" />
            <div>
                <ul className='flex gap-[2.4rem] font-kumb font-[500]'>
                    <li className='text-white'><a href="#about">About</a></li>
                    <li className='text-white'><a href="#projects">Projects</a></li>
                    <li className='text-white'><a href="#about">Contact</a></li>
                   
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar