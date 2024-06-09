import React, { useState } from 'react'
import trashIcon from './trashIcon.svg'
import timerIcon from './timer.svg'
import RemainderModal from './RemainderModal';

const Listitem = ({ item, handleCheck, handleDelete , openSetRemainderWindow, items, setItems}) => {

    const [addRemainderModalOpen, setAddRemainderModalOpen] = useState(false);

    const handleModalClose = () => {
        setAddRemainderModalOpen(false)
      }
    
      const handleModalOpen = () => {
        setAddRemainderModalOpen(true)
      }
    return (
        <li className='p-2' key={item.id}>
            <input type='checkbox' checked={item.checked}
                onChange={() => handleCheck(item.id)}
            />
            <label onDoubleClick={() => handleCheck(item.id)}
                style={(item.checked ? { textDecoration: 'line-through' } : null)}
            >{item.item}</label>
            {/* <button className='btn btn-danger' tabIndex='0' onClick={() => handleDelete(item.id)}><i class="fa-solid fa-trash"></i></button> */}
            {/* <i class="fa-solid fa-trash" id='deletebtn' role='button' onClick={() => handleDelete(item.id)}></i> */}
            {item.remainder ? <label>{item.remainder}</label> : 
            <img src={timerIcon} alt='timerIcon' role='button' id='remainderbtn' onClick={handleModalOpen}/> }
            <img src={trashIcon} alt='trashIcon' role='button' id='deletebtn' onClick={() => handleDelete(item.id)}/>
            <RemainderModal isOpen={addRemainderModalOpen} onClose={handleModalClose} title={item.item} itemId={item.id} items={items} setItems={setItems}/>
        </li>
    )
}

export default Listitem