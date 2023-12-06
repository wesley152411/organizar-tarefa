import React, { useState } from 'react'

export default function Modal({isOpen, setModalOpen, addTodo}) {

  const [text, setText] = useState(null);
  const [id, setId] = useState(0);

  const todoCreate = (text) => {
      const todoObj = { text: text, id: id };
      setId(id + 1);
      addTodo(todoObj);
  };


  if (isOpen) {
    return (
      <div style=
      {{position: 'fixed',
      top: '0',
      bottom: '0',
      left: '0',
      right: '0',
      backgroundColor: 'rgb(0,0,0, 0.7)',
      zIndex: '1000'
      }}>
        <div style=
        {{position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          padding: '100px',
          backgroundColor:'#fff',
          borderRadius: '10px',
          color: 'black',
        }}>
          <div style=

          {{color: 'black',
           fontSize:'25px',
            marginBottom:'20px'
            }}>Deseja editar esse item?</div>
          
          <input onChange={(e) => setText(e.target.value)}
          
          style=

          {{width: '130%',
            transform: 'translate(-15%, -45%)',
            color:'black',
            marginBottom:'8px',
            marginTop:'20px', 
            padding:'4%'
            }} type='text' placeholder='Colocar as descrições das tarefas aqui.' required />
          <br/>

          <button variant="text" onClick={() => todoCreate(text,setModalOpen())}
          
          style=

          {{ fontFamily: 'Poppins',
              padding: '8px 45px 8px 45px',
              backgroundColor:'#0C70F2',
              color:'white', 
              borderRadius:'10px', 
              fontSize:'15px', 
              border:'none', 
              cursor:'pointer' 
              }} type='submit'>Sim</button>

          <button onClick={setModalOpen} style=

          {{ fontFamily: 'Poppins',
              padding: '8px 45px 8px 45px',
              backgroundColor:'white',
              color:'#0C70F2', 
              borderRadius:'10px', 
              fontSize:'15px', 
              border:'1px solid black ',
              marginLeft: '20px', 
              cursor:'pointer' 
              }} type='submit'>Não</button>

          </div>
      </div>
    )
  }
                                                                                                                                                                            
  return null 
}
