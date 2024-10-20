import React, { useState } from 'react'
import closeIcon from './close.svg' 

const EditModal = ({ isOpen, onClose, title, itemId, items, setItems }) => {

    const [editInput, setEditInput] = useState(title);

    if (!isOpen) return null;

    const handleClose = (e) => {
        onClose();
        setEditInput(title)
    }

    const handleInputChange = (e) => {

        setEditInput(e.target.value)
    }

    const handleEdit = (e, id) => {
        e.preventDefault()

        const listItems = items.map((item) =>
            item.id === id ? { ...item, item: editInput } : item
          )
          setItems(listItems);
      
          localStorage.setItem("todo_list", JSON.stringify(listItems))

          onClose();
        setEditInput(editInput)

    }
  return (
    <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflowY: "auto"

            }}
        >
            <div
                style={{
                    background: "#FCFCFC",
                    height: 'auto',
                    width: 500,
                    margin: "auto",
                    padding: "2%",
                    borderRadius: "10px",
                    overflowY: "auto"

                }}
            >
                <img src={closeIcon} role='button' alt='close' onClick={handleClose} style={{
                    width: 30,
                    position: "relative",
                    right: "-220px"
                }}></img>
                <form className='editForm' onSubmit={(e) => handleEdit(e, itemId)} >  { /*onSubmit={(e) => handleRemainder(e, itemId)} */}
                <h6 style={{ marginBottom: 15 + 'px' }}>Edit Modal</h6>
                <div><label>Edit Task Name - </label><input type='text' id='editInput' value={editInput} onChange={(e) => handleInputChange(e, itemId)}></input></div>
                <div><button className='editUpdateBtn'>Update</button>
                    
                    </div>
                </form>
                
            </div>
        </div>
  )
}

export default EditModal