import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { login } from '../../redux/authSlice'
import { request } from '../../util/fetchAPI'
import classes from './signin.module.css'


const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [emptyFields, setEmptyFields] = useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handleLogin = async (e) => {
    e.preventDefault()

    if(email === '' || password === ''){
       setEmptyFields(true)
       setTimeout(() => {
        setEmptyFields(false)
       }, 2500)
    }

    try {
      const options = {
        "Content-Type": "application/json",
      }

      const data = await request('/auth/login', "POST", options, { email, password })

      dispatch(login(data))
      navigate("/")
    } catch (error) {
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 2000)
      console.error(error)
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2>Sign in</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder='Email...' onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder='Password...' onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">Sign in</button>
          <p>Vous avez déjà un compte? <Link to='/signup'>Register</Link></p>
        </form>
        {error && (
          <div className={classes.error}>
           Une erreur s'est produite lors de la connexion!
           Informations d'identification erronées ou erreur de serveur
          </div>
        )}
         {emptyFields && (
          <div className={classes.error}>
           Remplissez tous les champs!
          </div>
        )}
      </div>
    </div>
  )
}

export default Signup