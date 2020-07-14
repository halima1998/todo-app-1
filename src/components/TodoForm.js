
import React, { useState } from "react";
function TodoForm({ addTodo }) {
    const [value, setValue] = useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
      <form onSubmit={handleSubmit}>
       <span> <input
          type="text"
          className="input"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
         <div className="footer">
         <button className="btn">Add Todo</button></div></span>
      </form>
    );
  }
export default TodoForm;