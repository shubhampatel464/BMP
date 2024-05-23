import { useForm } from 'react-hook-form'
import { InputField } from './../Components/InputField'
import { Button } from '../Components/Button'
import LoginImg from './../Assets/LoginImg.png'
import Logo from './../Assets/Logo.png'
import {StickyFooterMobile} from '../Components/StickyFooterMobile'
import { Navbar } from '../Components/Navbar'

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    // This will contain all form data once submit button is clicked.
    const onSubmit = (data) => {
        console.log(data)
        // {Email: 'John@example.com', Password: 'secret'}
    }

    register('Email', { required: { value: true, message: 'Email is required' } })
    register('Password', {
        required: { value: true, message: 'Password is required' },
    })

    return (
        <>
           <Navbar />

            {/* flex div with login and image  */}
            <div className='flex justify-evenly w-screen items-center h-screen'>

                {/* login form div */}
                <div className='flex justify-center items-center h-screen'>

                    {/* form with box shadow */}
                    <form className='md:bg-white p-10 md:rounded-2xl md:shadow-2xl w-[400px] space-y-5 ' autoComplete='off'
                        id='loginForm' onSubmit={handleSubmit(onSubmit)}>
                        <h1 className='text-2xl font-bold'>Admin Login</h1>
                        <p className='text-gray-500'>Please fill your detail to access your account.</p>

                        {/* email and password input fields */}
                        <InputField
                            placeholder='admin@daiict.ac.in'
                            label='Email'
                            type='email'
                            register={register}
                            error={errors.Email?.message}
                        />
                        <InputField
                            label='Password'
                            type='password'
                            register={register}
                            error={errors.Password?.message}
                        />

                        {/* full width submit button */}
                        <Button type='submit'>Login</Button>
                    </form>
                </div>

                {/* image div, only displayed in large screens */}
                <div className='hidden lg:block'>
                    {/* image */}
                    <img src={LoginImg} alt='login' className='w-[600px]' />
                </div>
            </div>

            <StickyFooterMobile />
        </>
    )
}

export default LoginForm