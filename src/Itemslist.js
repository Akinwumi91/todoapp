import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const Itemslist = ({tasks, settasks, handlecheck, handledelete}) => {
  return (
    <div>
         <ul>
   {
        tasks.map(task =>(
            <li className='mytask' key={task.id}>
                <input type="checkbox" checked={task.checked} onChange={() => handlecheck(task.id)}/>

                <label style={task.checked ? {textDecoration:"line-through"} : null}  onDoubleClick={() =>handlecheck(task.id)}>{task.task}</label>
                
                <span onClick={() => handledelete(task.id)}>
                 <DeleteIcon />
                </span>

            </li>
        ))
    }
   </ul>
    </div>
  )
}

export default Itemslist