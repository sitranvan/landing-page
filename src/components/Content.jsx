import { FaUser } from 'react-icons/fa'
import { BsFillCreditCardFill } from 'react-icons/bs'
import { animated, useSpring } from 'react-spring'
import checkIconMobile from '../assets/mobile/checkpoint.svg'

const checkContent = [
    {
        id: 1,
        title: 'Card reports sen to your phone every weeks',
    },
    {
        id: 2,
        title: 'No external fees',
    },
    {
        id: 3,
        title: 'Set spending limits and restrictions',
    },
]

function Content() {
    const number = useSpring({ numbers: 1024, from: { numbers: 0 } })
    return (
        <section className='md:flex'>
            <div className='ml-[70px] mr-[54px] text-bold rounded-[26px] shadow-md flex flex-col items-center bg-gradient-to-b from-white/40 to-transparent md:w-[30%]'>
                <div className='flex mt-16 gap-8 items-start md:mt-11'>
                    <FaUser size={'24px'} className='mt-[12px]' />
                    <div className='text-26'>
                        <animated.div className='font-semibold'>
                            {number.numbers.to((val) => Math.floor(val))}
                        </animated.div>
                        <p className='text-14 font-semibold mb-[36px] md:text-16'>Cards Issued</p>
                    </div>
                </div>
                <div className='flex mb-16 gap-8 items-start md:mb-0'>
                    <BsFillCreditCardFill size={'24px'} className='mt-[12px]' />
                    <div className='text-26'>
                        <animated.div className='font-semibold'>
                            {number.numbers.to((val) => Math.floor(val))}
                        </animated.div>
                        <p className='text-14 font-semibold mb-[36px] md:text-16'>Cards Issued</p>
                    </div>
                </div>
            </div>
            <div className='text-13 flex flex-col w-full mt-[90px] font-semibold md:w-[40%] md:text-16 md:ml-8 md:mt-6'>
                {checkContent.map((item) => (
                    <div key={item.id} className='check-content md:mx-0'>
                        <img src={checkIconMobile} alt='check' />
                        <p>{item.title}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Content
