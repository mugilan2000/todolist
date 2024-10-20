import React, { useState } from 'react'
import trashIcon from './trashIcon.svg'
import timerIcon from './timer.svg'
import editIcon from './edit.svg'
import RemainderModal from './RemainderModal';
import EditModal from './EditModal';

const Listitem = ({ item, handleCheck, activeDrag, index, handleDelete, openSetRemainderWindow, items, setItems, setActiveDrag }) => {

    const [addRemainderModalOpen, setAddRemainderModalOpen] = useState(false);

    const [editModalOpen, setEditModalOpen] = useState(false);

    const handleDragStart = (index) => {
        setActiveDrag(index)
    }

    const handleDragOver = (index) => {
        if (index !== activeDrag) {
            const newItems = [...items]

            const [movedItem] = newItems.splice(activeDrag, 1)
            newItems.splice(index, 0, movedItem)
            setItems(newItems)
            localStorage.setItem("todo_list", JSON.stringify(newItems))
            setActiveDrag(index)

        }
    }

    const handleDrop = (index) => {
        const newItems = [...items]

        const [movedItem] = newItems.splice(activeDrag, 1)
        newItems.splice(index, 0, movedItem)
        setItems(newItems)
        localStorage.setItem("todo_list", JSON.stringify(newItems))
        setActiveDrag(null)

    }




    const handleModalClose = () => {
        setAddRemainderModalOpen(false)
    }

    const handleModalOpen = () => {
        setAddRemainderModalOpen(true)
    }

    const handleEditModalOpen = () => {
        setEditModalOpen(true)
    }

    const handleEditModalClose = () => {
        setEditModalOpen(false)
    }

    return (
        
        <tr className={`${item === item.draggableItem ?
            'dragging p-4' : 'p-4'
            }`} key={item.id} draggable='true' onDragStart={() => handleDragStart(index)}
            onDragOver={() => handleDragOver(index)}
            onDrop={() => handleDrop(index)}>
            <td><input type='checkbox' title='Mark as completed' checked={item.checked} id='check'
                onChange={() => handleCheck(item.id)}
            /></td>
            <td className='workitem'><span onDoubleClick={() => handleCheck(item.id)}
                style={(item.checked ? { textDecoration: 'line-through' } : null)}
            >{item.item}</span></td>
            {/* <button className='btn btn-danger' tabIndex='0' onClick={() => handleDelete(item.id)}><i class="fa-solid fa-trash"></i></button> */}
            {/* <i class="fa-solid fa-trash" id='deletebtn' role='button' onClick={() => handleDelete(item.id)}></i> */}
            <td><img src={editIcon} alt='editIcon' role='button' id='editbtn' onClick={handleEditModalOpen} /></td>
            {item.remainder ? <td><label>{item.remainder}</label></td> :
                <td><img src={timerIcon} alt='timerIcon' role='button' id='remainderbtn' onClick={handleModalOpen} /></td>}
            <td><img src={trashIcon} alt='trashIcon' role='button' id='deletebtn' onClick={() => handleDelete(item.id)} /></td>
            <RemainderModal isOpen={addRemainderModalOpen} onClose={handleModalClose} title={item.item} itemId={item.id} items={items} setItems={setItems} />
            <EditModal isOpen={editModalOpen} onClose={handleEditModalClose} title={item.item} itemId={item.id} items={items} setItems={setItems} />
        </tr>

    )
}

export default Listitem