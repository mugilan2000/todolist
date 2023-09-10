import React from 'react'
import trashIcon from './trashIcon.svg'

const Listitem = ({ item, handleCheck, handleDelete }) => {
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
            <img src={trashIcon} alt='trashIcon' role='button' id='deletebtn' onClick={() => handleDelete(item.id)}/>
        </li>
    )
}

export default Listitem