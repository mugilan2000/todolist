import React from 'react'
import Listitem from './Listitem'

const Itemslist = ({ items, handleCheck, handleDelete }) => {
    return (
        <ul>
            {items.map((item) => (

                <Listitem
                    item={item}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />

            ))}
        </ul>
    )
}

export default Itemslist