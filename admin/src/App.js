import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import { useRoutes } from './routes';
import 'materialize-css';
import { AuthContext } from './context/AuthContext';
import { useAuth } from './hooks/useAuth';
import { useModal } from './hooks/useModal';
import axios from 'axios';


axios.interceptors.response.use((response) => {
  if(response && response.data && response.data.message) {
    alert(response.data.message)
  }
  return response;
}, (e) => {
  if(e.response && e.response.data && e.response.data.message) {
    alert(e.response.data.message)
  }
});


const App = () => {
  const authHook = useAuth();
  const modalHook = useModal();
  
  const isAuth = !!authHook.token;
  const routes = useRoutes(isAuth, authHook.userRole)
  
  
  return (
    <AuthContext.Provider value={{authHook, modalHook}}>
      <BrowserRouter>
        {modalHook.modal}
        {modalHook.backdrop}
        
        {isAuth ? <Navigation /> : null}
        {routes}
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App;
