import React from "react";
import Todo from "./Todo";

const TodoContaier = ({todo ,deleteTodo}) => {
  return (
   
      <div className="container">
          { todo?.map((todos , index)=>{
            return<>
            <Todo todos={todos} deleteTodo={deleteTodo} index={index}/>
            </>
          }) }
       
      </div>
  
  );
};

export default TodoContaier;
