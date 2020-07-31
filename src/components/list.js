import React, { useState, useEffect } from "react";


export default function List(){
    const[newTodo , setNewTodo]= useState('')
    const [todos , setTodos] = useState([

    ])

     function handleNewTodo(event){
        event.preventDefault()
        setNewTodo(event.target.value)
     }

     function handleSubmite(event){
         event.preventDefault()
         if(newTodo==='') return
         setTodos([...todos, {id:Date.now(),text:newTodo}])
         console.log(newTodo)
         event.target.reset()
     }
     function removeTodo(id){
         setTodos(todos.filter((todo) => todo.id !==id))
     }

    return(
        <div className="container">
           <div className ="header">Todo list</div>
            <form onSubmit={handleSubmite}> 
                <input placeholder="todo name" name="todo" onChange={handleNewTodo}/>
                <button>jsjsj</button>
                <ul className='todolist'>
                    {todos.map((todo) => (
                        <li className='todo' key={todo}>{todo.text}
                        <span>
                          <a className="edit" href='#'>Edit</a>
                        <a href='#' onClick={() => removeTodo(todo.id)}>Delete</a>
                        </span>
                        </li>
                    ))}
                </ul>
            </form>
        </div>
    )
}

