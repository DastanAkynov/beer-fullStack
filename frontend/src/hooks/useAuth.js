import {useState, useEffect, useCallback} from 'react';

export const useAuth = () => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);

  const login = useCallback((jwtToken, id) =>{
    setUserId(id)
    setToken(jwtToken)
    localStorage.setItem('userData', JSON.stringify({
      userId: id,
      token: jwtToken
    }))
  }, [])

  const clearLocalStorage = () => {
    Object.keys(localStorage).map(key => {
      return localStorage.removeItem(key);
    })   
  }

  const logout = () => {
    setUserId(null)
    setToken(null)
    clearLocalStorage()
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('userData'))
    if(data && data.token) {
      login(data.token, data.userId)
    }
  }, [login])

  return {userId, token, login, logout}
}