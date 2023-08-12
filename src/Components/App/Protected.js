import React, { useEffect } from 'react'
import { getCookie } from '../../Axios/cookieConfig'
import { useNavigate } from 'react-router-dom'
function Protected(props) {
  const navigate = useNavigate()
  const { Component } = props

  useEffect(() => {
    let login = getCookie('token')
    if (!login) {
      navigate('/login')
    }
  })
  return (
    <div>
      <Component />
    </div>
  )
}

export default Protected
