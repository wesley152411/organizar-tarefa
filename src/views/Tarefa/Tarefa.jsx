import React, { useState } from 'react';
import './index.scss';
import Modal from '../componentes/Modal/Modal';
import List from '../componentes/List/List';
import Modal2 from '../componentes/Modal2/Modal2';


export default function Tarefa() {
  const [openModal, setOpenModal] = useState(false)
  
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
   setTodos([...todos, todo]);
  };
   
  const deleteTodo = (id) => {
    var filtered = todos.filter((todo) => todo.id !== id);  
    setTodos(filtered);
};

  return (
    <div>
        <header className='header'>
            <h1 className='header__h1'>Organização</h1>
             <div className='faixa'>   
                <table>
                  <tr>
                    <th className='faixa__th'>Tarefa</th>
                  </tr>
                </table>
            </div> 
            
        </header>
        <section className='section'>
            <h1 className='section__h1'>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>

            <ul className='section__h3'>
              <li className='section__h3__li'>Tarefa</li> 
              <li className='section__h3__li'>Status</li>
              <li className='section__h3__li'>Opções</li>
            </ul>
           
           <div className='corte'></div> 
          
          <div className='div'>

            
            { todos.map((todo) => ( 
              <div key={todo.id}>
                <Modal2 todo={todo} deleteTodo={deleteTodo}/>
                <List todo={todo}/>
              </div>
            ))} 
        
            <div className='div__3'>Nova tarefa...
                  <button className='div__3__button' 
                  style=
                    {{width:'100px', 
                      color:'white',
                      cursor:'pointer', 
                      backgroundColor: '#2D2D2D',
                      border: 'none',
                      fontSize: '20px' }}
                      
                  onClick={() => setOpenModal(true)}>
                   +
                  </button>
            </div>

            <Modal addTodo={addTodo}  isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}/>

          </div> 
        </section>
    </div>
  )
};


