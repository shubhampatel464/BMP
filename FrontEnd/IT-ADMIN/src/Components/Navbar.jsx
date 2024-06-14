import Logo from './../Assets/Logo.png'
import Cookies from 'js-cookie'
// import { useHistory } from 'react-router-dom'

export const Navbar = () => {
    // const history = useHistory()

    return (
        <>
            < nav className='hidden w-screen md:flex justify-between items-center py-4 px-10 bg-white shadow-md sticky top-0 z-50' >
                <div className='flex items-center space-x-2 cursor-pointer' onClick={
                    () => {
                        window.location.href = '/dashboard'
                    }
                }>
                    <img src={Logo} alt='logo' className='w-10 h-10' />
                    <h1 className='text-xl text-blue6 font-bold'>DAIICT</h1>
                </div>

                <div className='flex items-center space-x-4'>
                    <p onClick={
                        () => {
                            Cookies.remove('token')
                            window.location.href = '/login'
                        }
                    } className='text-blue6 font-medium cursor-pointer'>Sign Out</p>
                </div>
            </nav >
        </>
    )
}