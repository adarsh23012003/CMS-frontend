import React from 'react'
import { useState } from 'react'
import { instance } from '../../Axios/axiosConfig'
import { Await, Navigate } from 'react-router-dom'

function Register() {
  // const navigate = Navigate()
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    number: '',
    branch: '',
    semester: '',
    gender: '',
  })

  const handleInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUserData({ ...userData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newDta = { ...userData }
    const res = await instance.post('/register', newDta)
    console.log(res)

    console.log(newDta)
    setUserData({
      name: '',
      email: '',
      password: '',
      mobileNumber: '',
      branch: '',
      semester: '',
      gender: '',
    })
  }

  return (
    <div>
      <section className='bg-gray-50 '>
        <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
          <a
            href='#'
            className='flex items-center mb-6 text-2xl font-semibold text-gray-900 '
          >
            Register
          </a>
          <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  dark:border-gray-700'>
            <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
              <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl'>
                Create and account
              </h1>
              <form
                className='space-y-4 md:space-y-6'
                action='#'
                onSubmit={handleSubmit}
              >
                {/* *******name******* */}
                <div>
                  <label
                    htmlFor='name'
                    className='block mb-2 text-sm font-medium text-gray-900 '
                  >
                    Your Name
                  </label>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    value={userData.name}
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='Enter Your Name'
                    required=''
                    onChange={handleInput}
                  />
                </div>
                {/* ********email********* */}
                <div>
                  <label
                    htmlFor='email'
                    className='block mb-2 text-sm font-medium text-gray-900 '
                  >
                    Your Email
                  </label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    value={userData.email}
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='name@company.com'
                    required=''
                    onChange={handleInput}
                  />
                </div>
                {/* *******password********* */}
                <div>
                  <label
                    htmlFor='password'
                    className='block mb-2 text-sm font-medium text-gray-900 '
                  >
                    Password
                  </label>
                  <input
                    type='password'
                    name='password'
                    id='password'
                    value={userData.password}
                    placeholder='••••••••'
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    required=''
                    onChange={handleInput}
                  />
                </div>
                {/* *********phone number****** */}
                <div>
                  <label
                    htmlFor='phone number'
                    className='block mb-2 text-sm font-medium text-gray-900 '
                  >
                    Phone Number
                  </label>
                  <input
                    type='mobileNumber'
                    name='mobileNumber'
                    id='mobileNumber'
                    value={userData.mobileNumber}
                    placeholder='xxx-xxx-9854'
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    required=''
                    onChange={handleInput}
                  />
                </div>
                {/* *********branch and semester****** */}
                <div className='flex items-start gap-2'>
                  <div>
                    <label
                      htmlFor='Branch'
                      className='block mb-2 text-sm font-medium text-gray-900 '
                    >
                      Your Branch
                    </label>
                    <input
                      type='text'
                      name='branch'
                      id='branch'
                      value={userData.branch}
                      className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      placeholder='-----'
                      required=''
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='Semester'
                      className='block mb-2 text-sm font-medium text-gray-900 '
                    >
                      Your Semester
                    </label>
                    <input
                      type='text'
                      name='semester'
                      id='semester'
                      value={userData.semester}
                      className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500'
                      placeholder='---------'
                      required=''
                      onChange={handleInput}
                    />
                  </div>
                </div>
                {/* ********gender************* */}
                <div className='flex'>
                  <div className='flex items-center mr-4'>
                    <h1>Gender</h1>
                  </div>
                  <div className='flex items-center mr-4'>
                    <input
                      id='male'
                      type='radio'
                      value={userData.male}
                      name='gender'
                      onClick={() =>
                        setUserData({ ...userData, gender: 'male' })
                      }
                      className='w-4 h-4 bg-gray-100 border-black   dark:bg-gray-700 dark:border-gray-600'
                    />
                    <label
                      htmlFor='male'
                      className='ml-2 text-sm font-medium text-black'
                    >
                      Male
                    </label>
                  </div>
                  <div className='flex items-center mr-4'>
                    <input
                      id='female'
                      type='radio'
                      value={userData.female}
                      name='gender'
                      onClick={() =>
                        setUserData({ ...userData, gender: 'female' })
                      }
                      className='w-4 h-4   dark:ring-offset-gray-800  bg-black dark:border-gray-600'
                    />
                    <label
                      htmlFor='female'
                      className='ml-2 text-sm font-medium text-black'
                    >
                      Female
                    </label>
                  </div>
                </div>
                {/* ********submit button***** */}
                <button
                  type='submit'
                  className='w-full bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-green-500'
                >
                  Create an account
                </button>
                <p className='text-sm font-light text-gray-700'>
                  Already have an account?{' '}
                  <a
                    href='/login'
                    className='font-medium text-primary-600 hover:underline dark:text-red-500'
                  >
                    Login here
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Register
