import './App.css';
import Routeur from './routes/Route';
import {createContext} from 'react'
import {useState} from 'react'

export const User = createContext()
// export const UserContext = createContext();
// export const UserContext = React.createContext(false)

function App() {

  const [isLogged, setLogged] = useState(false)
  const [user, setUser] =useState({})

  const setAuth = (state, user) => {
    setLogged(state)
    setUser(user)
  }

  const changeContext = {
    user: user,
    Log: isLogged,
    setAuth: setAuth

  }
  return (
    <>
    <User.Provider value={changeContext}>
      <Routeur/>
    </User.Provider>
    </>
  );
}

export default App;
