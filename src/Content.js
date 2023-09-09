import React from 'react'
import Itemslist from './Itemslist'

const Content = ({items, handleCheck, handleDelete, year}) => {
    
  return (
    <main>
        <p>List of items to do for the day {year.getDate()+'-'+(year.getMonth()+1)+'-'+year.getFullYear()}</p>
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
    </main>
  )
}

export default Content