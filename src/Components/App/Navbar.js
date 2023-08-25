import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteCookie, getCookie } from '../../Axios/cookieConfig'

function Navbar() {
  const [isLogin, setIsLogin] = useState(false)
  const login = getCookie('token')
  console.log(isLogin)
  const logOut = () => {
    console.log('call function')
    deleteCookie('token')
    setIsLogin(false)
    console.log(isLogin)
  }
  useEffect(() => {
    if (!login) {
      setIsLogin(true)
    }
  })
  return (
    <>
      <div>
        <nav className='p-2 bg-blue-400'>
          <ul className='flex gap-2 font-serif justify-center'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            {!isLogin ? (
              <li>
                <Link to='/login'>Login</Link>
              </li>
            ) : (
              <li>
                <Link onClick={logOut}>LogOut</Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navbar
