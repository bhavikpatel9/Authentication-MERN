import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate = useNavigate()
    const handlelogout = ()=>{
        navigate('/')
    }
  return (
    <div>
      Dashboard page
      <button onClick={handlelogout}>logout</button>
    </div>
  )
}

export default Dashboard
