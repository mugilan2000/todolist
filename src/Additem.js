import React, { useRef } from 'react'

const Additem = ({ newItem, setNewItem, handleSubmit, year, length }) => {

  const inputRef = useRef();
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return (
    <div>
      <div className='headerItem'>
        <h4>{days[year.getDay()]}, {year.getDate()} {months[year.getMonth()]}</h4>
        <form className='itemForm' onSubmit={handleSubmit}>
          <input type='text' autoFocus placeholder='Add Your Task' ref={inputRef} value={newItem} onChange={(e) => setNewItem(e.target.value)} required />
          <button type='submit' className='btn' onClick={() => inputRef.current.focus()}><i class="fa-solid fa-plus"></i></button>
        </form>
      </div>
      <h3 className='taskcount'>{length} {length===1 ? 'task' :'tasks'}</h3>
    </div>
  )
}

export default Additem