import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router';
import { db } from '../firebase';

let  unsubscribe =()=>{

}
const Todo = ({user}) => {
    const [text, setText] = useState('')
    const [mytodos, setMytodos] = useState([])

    const history= useHistory();

    useEffect(() => {
    if(user){
        const docRef = db.collection('todos').doc(user.uid)
     unsubscribe= docRef.onSnapshot(docSnap=>{
            if(docSnap.exists){
                console.log(docSnap.data().todos);
                setMytodos(docSnap.data().todos)
                
            }else{
                console.log('no docs');
            }
        })
    }else{

        history.push('/login')
    }

    return ()=>{
        unsubscribe()
    }
         
    }, [])

    const onAddTodo =()=>{
        db.collection('todos').doc(user.uid).set({
            todos:[...mytodos,text],
             
        }) 
    
    }

    const deleteTodo=(deleteTodo)=>{
        const docRef= db.collection('todos').doc(user.uid)
        docRef.get().then(docSnap=>{
            const result = docSnap.data().todos.filter(todo => todo !=deleteTodo)
            docRef.update({
                todos:result
            })
        })
    }

    
 return (
   <div className='container' style={{width:"50vw"}}>
       <h1>Add Todos</h1>
       <div className="input-field">
               <input type="text" placeholder='Todo' value={text} onChange={(e)=>setText(e.target.value)}/>
           </div>
           <button className="btn blue" onClick={onAddTodo}>Add</button>

           <ul className="collection">
               {mytodos.map(todo=>{
                   return <li className="collection-item" key={todo}>
                       {todo}
                       <i className="material-icons right" onClick={()=>deleteTodo(todo)}>delete</i>
                       </li>
               })}
               
           </ul>
   </div>
 )
}

export default Todo;