import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editItem } from "../todoReducer";

export const Edit = () => {
  const { id } = useParams(); // grab the id
  const todoList = useSelector((state) => state.todo);
  console.log(todoList);

  const filterData = todoList.filter((txt) => txt.id == id);

  const myRef = useRef(null);
  const dispatch = useDispatch();
  const nav = useNavigate();

  const handleEdit = () => {
    const Ename = myRef.current.value;
    dispatch(editItem({ id: id, text: Ename }));
    nav("/");
  };

  return (
    <>
      {filterData.map((e) => (
        <div>
          <input type="text" ref={myRef} placeholder="edit text" />
          <button onClick={handleEdit}>save</button>
        </div>
      ))}
    </>
  );
};
