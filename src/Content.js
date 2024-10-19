import React from 'react'
import Itemslist from './Itemslist'

const Content = ({items, handleCheck, handleDelete, openSetRemainderWindow, setItems, setActiveDrag, onDrop, activeDrag}) => {
    
  return (
    <main>
        {(items.length) ? (
        <Itemslist 
        items = {items}
        setItems = {setItems}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
        openSetRemainderWindow = {openSetRemainderWindow}
        setActiveDrag = {setActiveDrag}
        onDrop = {onDrop}
        activeDrag = {activeDrag}
        />
        ) : (
            <p className='text-danger'>Your list is empty</p>
        )
}
    </main>
  )
}

export default Content