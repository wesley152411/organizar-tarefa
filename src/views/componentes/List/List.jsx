import React, { useState } from "react";
import "./index.scss";
import Lixeira from "../../../assets/lixeira.svg";
import Editar from "../../../assets/editar.svg";
//import ModalEdit from '../Modal-edit/Moda-edit';

export default function List({
  todo,
  setTodoToDelete,
  setOpenModal2,
  setOpenModalEdit,
}) {
  return (
    <div className="list">
      {" "}
      {todo.text}
      <input type="checkbox" className="marcar" />
      <img
        src={Editar}
        alt="ERROR"
        onClick={() => {
          setOpenModalEdit(true);
        }}
      />
      <img
        src={Lixeira}
        alt="ERROR"
        onClick={() => {
          setOpenModal2(true);
          setTodoToDelete(todo.id);
        }}
      />
    </div>
  );
}
