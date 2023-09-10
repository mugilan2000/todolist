import React from 'react'
import Itemslist from './Itemslist'

const Content = ({items, handleCheck, handleDelete}) => {
    
  return (
    <>
        {(items.length) ? (
        <Itemslist 
        items = {items}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
        />
        ) : (
            <p className='text-danger'>Your list is empty</p>
        )
}
    </>
  )
}

export default Content