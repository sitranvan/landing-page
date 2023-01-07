import { useState } from 'react'
import { BsSunFill, BsMoonFill } from 'react-icons/bs'
import { HiOutlineMenu } from 'react-icons/hi'
import { MdOutlineClose } from 'react-icons/md'
import useDarkSide from '../useDarkMode'
import useDarkMode from '../useDarkMode'

const menuItems = [
    {
        id: 1,
        title: 'Features',
    },
    {
        id: 2,
        title: 'Menu',
    },
    {
        id: 3,
        title: 'Our Story',
    },
    {
        id: 4,
        title: 'Contact',
    },
]

function NavBar({ isMobile }) {
    const [openMenu, setOpenMenu] = useState(false)
    const handleMenu = () => {
        setOpenMenu(!openMenu)
    }
    const [colorTheme, setTheme] = useDarkSide()
    const toggleDarkMode = () => {
        setTheme(colorTheme)
    }
    return (
        <nav className='flex  md:items-center'>
            <div className='flex items-center'>
                <div className='text-20 font-bold mr-2 md:text-26'>NerdCard</div>
                {colorTheme === 'dark' ? (
                    <BsSunFill size={'24px'} color='#e9b463' className='cursor-pointer' onClick={toggleDarkMode} />
                ) : (
                    <BsMoonFill size={'24px'} color='#e9b463' className='cursor-pointer' onClick={toggleDarkMode} />
                )}
            </div>
            <ul className='ml-auto text-16 font-semibold'>
                {openMenu && isMobile && (
                    <MdOutlineClose size={'24px'} className='cursor-pointer' onClick={handleMenu} />
                )}
                {!openMenu && isMobile && (
                    <HiOutlineMenu size={'24px'} className='cursor-pointer' onClick={handleMenu} />
                )}
                {openMenu && (
                    <div className='absolute right-8 bg-white px-10 py-4 text-left text-black  text-13 rounded-[10px]'>
                        {menuItems.map((item) => (
                            <li key={item.id} className='mt-2 cursor-pointer'>
                                {item.title}
                            </li>
                        ))}
                    </div>
                )}
                {!openMenu && !isMobile && (
                    <div className='flex text-16 dark:text-white text-black gap-12'>
                        {menuItems.map((item) => (
                            <li key={item.id} className='mt-2  hover:text-pink-500 cursor-pointer md:mt-0'>
                                {item.title}
                            </li>
                        ))}
                    </div>
                )}
            </ul>
        </nav>
    )
}

export default NavBar
