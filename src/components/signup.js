import React,{useState} from 'react';

const Singup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
    const onHandleSubmit=(e)=>{
  e.preventDefault();
  console.log(email,password);
  
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