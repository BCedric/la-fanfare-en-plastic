import React, { useState } from 'react'

import Http from 'services/Http'

import AdminLogin from './AdminLogin'
import Dates from './Dates/Dates'
import Fanfaron from './Fanfaron/Fanfaron'
import PressArticles from './PressArticles/PressArticles'

const Admin = () => {
  const [isUserLogged, setIsUserLogged] = useState(true)

  const submitLogin = (login, password) =>
    Http.put('auth', { login, password }).then(
      (res) => res === 'OK' && setIsUserLogged(true)
    )

  return (
    <div className="admin">
      {!isUserLogged ? (
        <AdminLogin onSubmit={submitLogin} />
      ) : (
        <React.Fragment>
          <h1>Administration</h1>
          <Dates />
          <PressArticles />
          <Fanfaron />
        </React.Fragment>
      )}
    </div>
  )
}

export default Admin
