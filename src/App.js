import { useEffect, useState } from 'react'
import Content from './components/Content'
import NavBar from './components/NavBar'
import Slogan from './components/Slogan'
import './App.css'

function App() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    })

    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleSize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }
        window.addEventListener('resize', handleSize)
        handleSize()
        return () => window.removeEventListener('resize', handleSize)
    }, [])

    useEffect(() => {
        if (windowSize.width < 500) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }, [windowSize])

    return (
        <div className='overflow-y-auto overflow-x-hidden font-sora h-screen px-4 py-8 bg-gradient-to-b dark:from-purple-900 dark:to-purple-700 from-white to-pink-500 dark:text-white md:px-20 text-black'>
            <NavBar isMobile={isMobile} />
            <Slogan />
            <Content />
        </div>
    )
}

export default App
