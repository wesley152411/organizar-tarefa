import React, { useState } from "react";
import "./index.scss";
import Modal from "../componentes/Modal/Modal";
import List from "../componentes/List/List";
import Modal2 from "../componentes/Modal2/Modal2";
import ModalEdit from "../componentes/ModalEdit/ModaEdit";

export default function Tarefa() {
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [todoToDelete, setTodoToDelete] = useState(false);
  const [id, setId] = useState(0);
  const [todos, setTodos] = useState([]);
  const [editText, setEditText] = useState("");

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = () => {
    const filtered = todos.filter((todo) => todo.id !== todoToDelete);
    setTodos(filtered);
  };

  const editTodo = (todo) => {
    let idToReplace = null;

    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id == todo.id) {
        idToReplace = todo.id;
        break;
      }
    }

    if (idToReplace != null) {
      todos[idToReplace].text = editText;
    }
  };

  return (
    <div>
      {openModal && (
        <Modal
          addTodo={addTodo}
          setModalOpen={() => setOpenModal(!openModal)}
          id={id}
          setId={setId}
        />
      )}
      {openModal2 && (
        <>
          <Modal2
            setIsOpen={() => setOpenModal2(!openModal2)}
            deleteTodo={deleteTodo}
          />
        </>
      )}
      {openModalEdit !== null && (
        <>
          <ModalEdit 
          setEditOpen={setOpenModalEdit}
          editTodo={editTodo}
          itemId={openModalEdit}
          setEditText={setEditText}
          />
        </>
      )}
      <header className="header">
        <h1 className="header__h1">Organização</h1>
        <div className="faixa">
          <table>
            <tr>
              <th className="faixa__th">Tarefa</th>
            </tr>
          </table>
        </div>
      </header>
      <section className="section">
        <h1 className="section__h1">
          Otimize seu tempo e se organize com o nosso Planejador Diário.
        </h1>

        <ul className="section__h3">
          <li className="section__h3__li">Tarefa</li>
          <li className="section__h3__li">Status</li>
          <li className="section__h3__li">Opções</li>
        </ul>

        <hr
          style={{
            height: "1px",
            backgroundColor: "white",
            width: "40%",
            marginLeft: "30.5%",
            marginTop: "2%",
          }}
        />

        <div className="div">
          {todos.map((todo) => (
            <div key={todo.id}>
              <List
                todo={todo}
                setTodoToDelete={setTodoToDelete}
                setOpenModal2={setOpenModal2}
                setOpenModalEdit={setOpenModalEdit}
              />
            </div>
          ))}

          <div className="div__3">
            Nova tarefa...
            <button
              className="div__3__button"
              style={{
                width: "100px",
                color: "white",
                cursor: "pointer",
                backgroundColor: "#2D2D2D",
                border: "none",
                fontSize: "20px",
              }}
              onClick={() => setOpenModal(true)}
            >
              +
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
