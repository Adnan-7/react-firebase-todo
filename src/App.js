import React from 'react'
import { Route, Switch } from 'react-router';
import Login from './components/login';
import NavBar from './components/navBar';
import Singup from './components/signup';
import Todo from './components/todo';

function App() {
  return (
    <div className="App">

      <NavBar />
      <Switch>
         <Route path='/login'>
           <Login />
         </Route>

         <Route path='/singup'>
           <Singup />
         </Route>

         <Route exact path='/'>
           <Todo />
         </Route>


      </Switch>
      </div>
  );
}

export default App;
