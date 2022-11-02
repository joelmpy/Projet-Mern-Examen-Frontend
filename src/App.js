import './App.css';
import Routeur from './routes/Route';
import {createContext} from 'react'

export const User = createContext()
function App() {
  const changeContext = {
    user:{
      firstname:"Jean",
      surname:"Pierre",
      age:18,
      aboueMe:"Je suis fan de sport",
      email:"jeanpierre@gmail.com",
      activity:2,
      height:183,
      gender:'homme'
    }
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
