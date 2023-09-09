import React from 'react'

const Additem = ({ newItem, setNewItem, handleSubmit, year }) => {
  return (
    <div>
      <form className='itemForm' onSubmit={handleSubmit}>
        <input type='text' autoFocus placeholder='Add Item' value={newItem} onChange={(e) => setNewItem(e.target.value)} required />
        <button type='submit' className='btn'><i class="fa-solid fa-plus"></i></button>
      </form>
      <p>List of items to do for the day {year.getDate()+'-'+(year.getMonth()+1)+'-'+year.getFullYear()}</p>
    </div>
  )
}

export default Additem