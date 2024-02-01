import React, { memo } from 'react'

function Todo({todo, addTodo}) {
  return (
    <div>
      {todo.map((todoValue, todoIndex) => {
        return <p key={todoIndex}>{todoValue} : {todoIndex}</p>
      })}
      <button onClick={addTodo}>Add Todo</button>
    </div>
  )
}

export default memo(Todo)
