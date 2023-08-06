import React from 'react'
import Itemslist from './Itemslist';

const Content = ({tasks, settasks, handlecheck, handledelete}) => {
 
  return (
    <>
  {
    tasks.length ? (
   <Itemslist 
    tasks={tasks}
    settasks={settasks}
    handlecheck={handlecheck}
    handledelete={handledelete}
   />
    ):(
        <p style={{textAlign:"center"}}>Your Task List Is Empty</p>
    )
  }


    </>
  )
}

export default Content