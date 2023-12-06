import React from 'react'

export default function Modal2({isOpen2, setModalOpen2, todo, deleteTodo}) {



    if (isOpen2) {
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
                    }}>Deseja excluir esse item?</div>
                

                <button  onClick={() => deleteTodo(todo.id)}
                        
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

                <button onClick={setModalOpen2} style=

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
}
