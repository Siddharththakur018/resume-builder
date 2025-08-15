import { useLocation, useNavigate } from "react-router-dom"

function Navbar() {
    const navigate = useNavigate()
    const location = useLocation()

    const getActiveClass = (path: string) =>
        location.pathname === path 
            ? 'underline decoration-blue-600 text-blue-800 underline-offset-4'
            : ''

    return (
        <div className='bg-[var(--home-bg-color)]'>
            <div className='w-[1200px] mx-auto'>
                <header className='flex justify-between items-center p-4'>
                    <div className='font-bold text-lg'>
                        EasyResumeGen
                    </div>
                    <div className='flex w-2xl justify-around'>
                        <div 
                            onClick={() => navigate('/')}
                            className={`cursor-pointer ${getActiveClass('/')}`}>
                            How it works
                        </div>
                        <div 
                            onClick={() => navigate('/products')}
                            className={`cursor-pointer ${getActiveClass('/products')}`}>
                            Products
                        </div>
                        <div 
                            onClick={() => navigate('/resource')}
                            className={`cursor-pointer ${getActiveClass('/resource')}`}>
                            Resources
                        </div>
                        <div 
                            onClick={() => navigate('/pricing')}
                            className={`cursor-pointer ${getActiveClass('/pricing')}`}>
                            Pricing
                        </div>
                        <div 
                            onClick={() => navigate('/about')}
                            className={`cursor-pointer ${getActiveClass('/about')}`}>
                            About us
                        </div>
                        <div 
                            onClick={() => navigate('/contact')}
                            className={`cursor-pointer ${getActiveClass('/contact')}`}>
                            Contact
                        </div>
                    </div>

                    <div className='flex w-60 justify-between'>
                        <div>
                            <button 
                                onClick={() => navigate('/login')} 
                                className='p-2 border-1 w-20 rounded-md cursor-pointer border-blue-800'>
                                Login
                            </button>
                        </div>
                        <div>
                            <button className='bg-blue-800 p-2 cursor-pointer rounded-md text-white'>
                                Start Tracking Now
                            </button>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default Navbar