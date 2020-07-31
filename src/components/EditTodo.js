import React, { useState } from 'react';
import useInputState from "./hooks/useInputState";


function EditTodo(addTodo){
    const [todoValue , updateTodoValue ,resetTodoValue] =useState(addTodo)

return(
    <form>
    <input margin="normal"
     value={todoValue} onChange={updateTodoValue}
     />
        </form>
)
}
export default EditTodo;