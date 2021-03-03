import React from 'react'
import Dates from './Dates/Dates'
import PressArticles from './PressArticles/PressArticles'

const Admin = () => {
  return (
    <div className="admin">
      <h1>Administration</h1>
      <Dates />
      <PressArticles />
    </div>
  )
}

export default Admin
