import React from 'react'

const Footer = ({length}) => {

    const year = new Date();
  return (
    <footer className='p-4'>
        Copyright &copy; {year.getFullYear()}
        <p className='myName'>Design & Developed by Muthu Saravana Mugilan S</p>
    </footer>
  )
}

export default Footer