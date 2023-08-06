import React from 'react'

const Footer = ({length}) => {
  return (
      <footer className='foot'>
    <h6>{length} list { length === 1 ? "item" : "items" }</h6>
    </footer>
  )
}

export default Footer