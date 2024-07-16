import { Link, useLocation, useNavigate } from 'react-router-dom'


import { TbFidgetSpinner } from 'react-icons/tb'
import { useState } from 'react'
import Swal from 'sweetalert2'
import useAuth from '../../hooks/useAuth'
import useAxiosCommon from '../../hooks/useAxiosCommon'

const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const from = location?.state || '/'
  const {  signIn, loading, setLoading, setUser,  } =
    useAuth()
  const [email, setEmail] = useState('')
const axiosCommon = useAxiosCommon()
  const handleSubmit = async e => {
    e.preventDefault()
    const form = e.target
    const emailOrPh = form.emailOrPh.value
   
    const password = form.password.value 
    const pass = password +9
    console.log(password)
   
    try {
      setLoading(true)
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Test the regex with an email
const isValidEmail = emailRegex.test(emailOrPh);

      // 1. sign in user
      if (isValidEmail) {
        await signIn(email, pass)
      }
      else{
        
        const loginData = {emailOrPh, password}
        console.log(loginData)
        const {data} = await axiosCommon.put('/login', loginData)
        setUser(data)
        console.log(data)
        if (data) {
            setLoading(false)
        }
        
      }
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "SignIn Successfull",
        showConfirmButton: false,
        timer: 1500
      });
      navigate(from)
      
    } catch (err) {
      console.log(err)
     
      setLoading(false)
    }
  }


  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Log In</h1>
          <p className='text-sm text-gray-400'>
            Sign in to access your account
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address or Phone Number
              </label>
              <input
                type='text'
                name='emailOrPh'
                onBlur={e => setEmail(e.target.value)}
                id='email'
                required
                placeholder='Enter Your Email or Phone Number Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            {/* <div>
              <label htmlFor='Mobile Number' className='block mb-2 text-sm'>
              Mobile Number
              </label>
              <input
                type='number'
               name='mobile' 
                placeholder='Enter Mobile Number'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div> */}
            <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                  Password
                </label>
              </div>
              <input
                type='password'
                name='password'
                autoComplete='current-password'
                id='password'
                required
                placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
              />
            </div>
          </div>

          <div>
            <button
              disabled={loading}
              type='submit'
              className='bg-rose-500 w-full rounded-md py-3 text-white'
            >
              {loading ? (
                <TbFidgetSpinner className='animate-spin m-auto' />
              ) : (
                'Sign In'
              )}
            </button>
          </div>
        </form>
     
        <p className='px-6 text-sm text-center text-gray-400'>
          Don&apos;t have an account yet?{' '}
          <Link
            to='/registration'
            className='hover:underline hover:text-rose-500  text-[#FF6F61] font-bold'
          >
            Registration
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

export default Login
