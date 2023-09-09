import React from 'react'

const Additem = ({newItem, setNewItem, handleSubmit}) => {
  return (
    <form className='itemForm' onSubmit={handleSubmit}>
        <input type='text' autoFocus placeholder='Add Item' value={newItem} onChange={(e)=>setNewItem(e.target.value)} required />
        <button type='submit' className='btn'><i class="fa-solid fa-plus"></i></button>
    </form>
  )
}

export default Additem