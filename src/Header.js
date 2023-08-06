import React from 'react'

const Header = () => {
  let date = new Date()
  return (
    <header>
    <div className='myhead'>
    <h1>Today</h1>
    <p className='mydate'>{`${date.getDate()} /${date.getMonth() + 1} /${date.getFullYear()}`}</p>
    </div>
    
    <h3 className='dailytask'>Daily Task</h3>

    </header>
  )
}

export default Header