import React from "react";

const Todo = ({ todos ,index ,deleteTodo }) => {
  return (
    
      <div className="todo">
        <p>{todos}</p>
        <div className="action">
          <input type="checkbox" />
          <button onClick={()=>deleteTodo(index)}>Delete</button>
        </div>
      </div>
  );
};

export default Todo;
