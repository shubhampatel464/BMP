import Logo from './../Assets/Logo.png'

export const Navbar = () => (
    <>
        < nav className='hidden w-screen md:flex justify-between items-center py-4 px-10 bg-white shadow-md sticky top-0 z-50' >
            <div className='flex items-center space-x-2'>
                <img src={Logo} alt='logo' className='w-10 h-10' />
                <h1 className='text-xl text-blue6 font-bold'>DAIICT</h1>
            </div>

            <div className='flex items-center space-x-4'>
                <a href='/login' className='text-blue6 font-medium'>Sign Out</a>
            </div>
        </nav >
    </>
)