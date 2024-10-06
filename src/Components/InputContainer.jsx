import React, { useState } from "react";

const InputContainer = ({inputValue , writeTodo , addTodo}) => {

  return (
    <div>
      <div className="input-container">
        <input type="text" value={inputValue} onChange={writeTodo} />
        <button onClick={addTodo}> + </button>
      </div>
    </div>
  );
};

export default InputContainer;
