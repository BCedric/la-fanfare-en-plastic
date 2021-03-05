import React, { useState } from 'react'

const AdminLogin = ({ onSubmit }) => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const submit = (e) => {
    e.preventDefault()
    onSubmit(login, password)
  }
  return (
    <form onSubmit={submit} className="admin-login">
      <div>
        <label htmlFor="info-input" className="form-label">
          Login
        </label>
        <input
          type="text"
          id="info-input"
          className="form-control"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="info-input" className="form-label">
          Mot de passe
        </label>
        <input
          type="password"
          id="info-input"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="btn btn-primary">Valider</button>
    </form>
  )
}

export default AdminLogin
