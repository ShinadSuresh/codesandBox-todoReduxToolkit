import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteList } from "../todoReducer";
import { useNavigate } from "react-router-dom";

const Todo = () => {
  const [todoo, setTodo] = useState("");
  const nav = useNavigate();

  const todoList = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (todoo) {
      dispatch(addTodo({ id: Date.now(), text: todoo }));
      setTodo("");
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteList({ id: id }));
  };

  return (
    <>
      <input
        type="text"
        placeholder="EnterText"
        value={todoo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={handleAdd}>add</button>
      <ul>
        {todoList.map((e) => (
          <li key={e.id}>
            {e.text}
            <button onClick={() => nav(`edit/${e.id}`)}>edit</button>
            <button onClick={() => handleDelete(e.id)}>delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
