import React from 'react'

const Footer = ({length}) => {

    const year = new Date();
  return (
    <footer className='p-4 text-white'>
        Copyright &copy; {year.getFullYear()}
        <p className='myName'>Developed by Mugilan S</p>
        <p className='totalItems'>{length} list of {length===1 ? 'item' : 'items'}</p>
    </footer>
  )
}

export default Footer