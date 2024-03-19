
import { createContext, useState } from 'react';
import Header from './components/Header';
import Home from './routes/Home';
import Login from './routes/Login';
import Register from './routes/Register';
import {Toaster, toast} from 'react-hot-toast';
import { onMessage } from 'firebase/messaging';
import { messaging } from './firebase';
import Shopping from './routes/Shopping';
import Footer from './components/Footer';
import TaskList from './routes/TaskList';

export const AppContext = createContext(null);

onMessage(messaging, payload => {
  //console.log("Nueva notificación en directo", payload);
  toast.custom(t => (
    <div className=' bg-sky-300 p-4 rounded-lg shadow-lg'>
      <h1 className=' text-lg text-sky-700 font-semibold'>{payload.notification.title}</h1>
      <p className=' text-sm text-sky-600'>{payload.notification.body}</p>
    </div>
    )
  );
})

function App() {
  const [route, setRoute] = useState("Home");
  const [user, setUser] = useState(null);
  return (
  <AppContext.Provider value={{ route, setRoute, user, setUser}}>
    <div className=' h-screen'>
    <Toaster/> 
    <Header/>
    <main className='px-6 pt-24 pb-20'>
      {route === 'Home' && <Home/>}
      {route === 'Login' && <Login/>}
      {route === 'Register' && <Register/>}
      {route === 'Shopping' && <Shopping/>}
      {route === 'TaskList' && <TaskList/>}
      {user && <p>Usuario logueado: {user.email}</p>}
    </main>
    <Footer/>
    </div>
  </AppContext.Provider>
  );
}

export default App;
