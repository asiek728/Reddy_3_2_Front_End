import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {
  const [error, setError] = useState(null)
  const [Loading, setLoading] = useState(null)
  const { dispatch } = useAuthContext()

  const login = async (email, password) => {
    setLoading(true)
    setError(null)

    const response = await fetch('https://flashcardsbackend-v5tb.onrender.com/users/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password })
    })
    const json = await response.json()

    if (!response.ok) {
      setLoading(false)
      setError(json.error)
    }
    if (response.ok) {

      localStorage.setItem('user', JSON.stringify(json))

      dispatch({type: 'LOGIN', payload: json})

      setLoading(false)
    }
  }

  return { login, Loading, error }
}
