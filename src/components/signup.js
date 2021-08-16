import React,{useState} from 'react';
import { useHistory } from 'react-router';
import {auth} from '../firebase';

const Singup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    let history=useHistory()
  
    const onHandleSubmit= async (e)=>{
  e.preventDefault();
  console.log(email,password);

  try{
    const result =await auth.createUserWithEmailAndPassword(email, password);
    console.log(result);
    window.M.toast({html: `Welcome ${result.user.email}`,classes:'green'})
    history.push('/')
  }catch(err){
     window.M.toast({html: err.message ,classes:'red'})
  }
    }
   return (
    <div className='center container' style={{width:"50vw"}}>
         <h3>Please Signup</h3>
         <form onSubmit={(e)=>onHandleSubmit(e)}>
             <div className="input-field">
                 <input type="email" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                 <input type="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
             </div>
             <button className="btn blue">Signup</button>
         </form>
     </div>
   )
  }
export default Singup;