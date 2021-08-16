import React,{useState,useEffect} from 'react'
import { Route, Switch } from 'react-router';
import Login from './components/login';
import NavBar from './components/navBar';
import Singup from './components/signup';
import Todo from './components/todo';
import { auth } from './firebase';

function App() {

  const [user, setUser] = useState(null);
useEffect(()=>{
 const  unsubscribe= auth.onAuthStateChanged((user)=>{
    if(user) setUser(user)
    else setUser(null)
  })

return ()=>{
  unsubscribe()
}

},[])
  
  return (
    <div className="App">

      <NavBar user={user}/>
      <Switch>
         <Route path='/login'>
           <Login />
         </Route>

         <Route path='/singup'>
           <Singup />
         </Route>

         <Route exact path='/'>
           <Todo user={user}/>
         </Route>


      </Switch>
      </div>
  );
}

export default App;
