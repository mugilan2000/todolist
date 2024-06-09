import React from 'react'
import Itemslist from './Itemslist'

const Content = ({items, handleCheck, handleDelete, openSetRemainderWindow, setItems}) => {
    
  return (
    <main>
        {(items.length) ? (
        <Itemslist 
        items = {items}
        setItems = {setItems}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
        openSetRemainderWindow = {openSetRemainderWindow}
        />
        ) : (
            <p className='text-danger'>Your list is empty</p>
        )
}
    </main>
  )
}

export default Content