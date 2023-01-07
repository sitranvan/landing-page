import React from 'react'
import Cards from '../assets/desktop/isocard.svg'
function Slogan() {
    return (
        <section className='text-36 my-14 font-extrabold md:my-28 md:flex md:items-center md:justify-around md:text-48'>
            <div className='text-center'>
                <p className=''>
                    Earn <span className='dark:text-purple-300 text-white'>More</span>
                </p>
                <p>Pay less</p>
                <button className='text-20 px-6 py-[6px] font-bold mt-[27px] bg-purple-500 rounded-[14px] hover:bg-pink-500 transition-all duration-300 md:text-24 md:px-8 md:py-[8px]'>
                    Start
                </button>
            </div>
            <div className='mt-[69px] md:mt-0'>
                <img src={Cards} alt='card' />
            </div>
        </section>
    )
}

export default Slogan
