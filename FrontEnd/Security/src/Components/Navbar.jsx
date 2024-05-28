import Logo from './../Assets/Logo.png'

export const Navbar = () => (
    <>
        < nav className='hidden md:flex justify-between items-center p-4 bg-white shadow-md sticky top-0 z-50' >
            <div className='flex items-center space-x-2'>
                <img src={Logo} alt='logo' className='w-10 h-10' />
                <h1 className='text-xl font-bold'>DAIICT</h1>
            </div>
        </nav >
    </>
)