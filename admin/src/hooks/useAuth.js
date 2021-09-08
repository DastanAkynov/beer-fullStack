import {useState, useEffect, useCallback} from 'react';

export const useAuth = () => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [userRole, setUserRole] = useState(null)

  const login = useCallback((jwtToken, id, role) => {
    setUserId(id)
    setToken(jwtToken)
    setUserRole(role)
    localStorage.setItem('userData', JSON.stringify({    
      userId: id,
      role: role,
      token: jwtToken
    }))
  })

  // const clearLocalStorage = () => {
  //   Object.keys(localStorage).map(key => {
  //     return localStorage.removeItem(key);
  //   })   
  // }

  const logout = () => {
    setUserId(null)
    setToken(null)
    setUserRole(null)
    localStorage.removeItem('userData')
    // clearLocalStorage()
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('userData'))
    if(data && data.token) {
      login(data.token, data.userId, data.role)
    }
  }, [login])

  return {userId, token, userRole, login, logout}
}
