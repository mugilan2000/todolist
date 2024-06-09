import React from 'react'
import Listitem from './Listitem'

const Itemslist = ({ items, handleCheck, handleDelete, openSetRemainderWindow , setItems}) => {
    return (
        <ul>
            {items.map((item) => (

                <Listitem
                    item={item}
                    items={items}
                    setItems={setItems}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                    openSetRemainderWindow = {openSetRemainderWindow}
                />

            ))}
        </ul>
    )
}

export default Itemslist