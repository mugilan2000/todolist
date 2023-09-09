import React from 'react'

const Header = ({title}) => {
  return (
    <header>
        <div className='text-white'>
        <h3 className='p-4'>{title}</h3>
        </div>
    </header>
  )
}
Header.defaultProps = {
  title: "To do List"
}

export default Header