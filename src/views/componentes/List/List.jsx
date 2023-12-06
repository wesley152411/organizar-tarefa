import React, { useState } from 'react'
import './index.scss'
import Marcar from '../../../assets/marcar.svg';
import Lixeira from '../../../assets/lixeira.svg';
import Editar from '../../../assets/editar.svg';
import Modal2 from '../Modal2/Modal2';

export default function List({todo}) {
    const [openModal, setOpenModal2] = useState(false)

    //onClick={() => setOpenModal2(true)}
  return (

    <div className='div__1'> {todo.text}
        
        <img className='div__1__img' src={Marcar} alt="ERROR" />
        <img className='div__1__img__2' src={Editar}alt="ERROR"/>
        <img src={Lixeira} alt="ERROR" onClick={() => setOpenModal2(true)} />
    
        <Modal2 isOpen2={openModal} setModalOpen2={() => setOpenModal2(!openModal)}/>
        
    </div>
  )
}
