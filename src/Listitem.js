import React, { useState } from 'react'
import trashIcon from './trashIcon.svg'
import timerIcon from './timer.svg'
import RemainderModal from './RemainderModal';

const Listitem = ({ item, handleCheck, handleDelete, openSetRemainderWindow, items, setItems }) => {

    const [addRemainderModalOpen, setAddRemainderModalOpen] = useState(false);

    const handleModalClose = () => {
        setAddRemainderModalOpen(false)
    }

    const handleModalOpen = () => {
        setAddRemainderModalOpen(true)
    }
    return (

        <tr className='p-4' key={item.id}>
            <td><input type='checkbox' checked={item.checked}
                onChange={() => handleCheck(item.id)}
            /></td>
            <td className='workitem'><span onDoubleClick={() => handleCheck(item.id)}
                style={(item.checked ? { textDecoration: 'line-through' } : null)}
            >{item.item}</span></td>
            {/* <button className='btn btn-danger' tabIndex='0' onClick={() => handleDelete(item.id)}><i class="fa-solid fa-trash"></i></button> */}
            {/* <i class="fa-solid fa-trash" id='deletebtn' role='button' onClick={() => handleDelete(item.id)}></i> */}
            {item.remainder ? <td><label>{item.remainder}</label></td> :
                <td><img src={timerIcon} alt='timerIcon' role='button' id='remainderbtn' onClick={handleModalOpen} /></td>}
            <td><img src={trashIcon} alt='trashIcon' role='button' id='deletebtn' onClick={() => handleDelete(item.id)} /></td>
            <RemainderModal isOpen={addRemainderModalOpen} onClose={handleModalClose} title={item.item} itemId={item.id} items={items} setItems={setItems} />
        </tr>
    )
}

export default Listitem