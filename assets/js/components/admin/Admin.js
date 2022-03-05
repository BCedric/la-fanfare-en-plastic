import React, { useState } from 'react'

import Http from 'services/Http'

import AdminLogin from './AdminLogin'
import CabaretPage from './CabaretPage/CabaretPage'
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
          <React.Fragment>
            <h1>Administration</h1>
            <CabaretPage />
            <hr />
            <Dates />
            <hr />
            <PressArticles />
            <hr />
            <Fanfaron />
          </React.Fragment>
        </React.Fragment>
      )}
    </div>
  )
}

export default Admin
