import React from 'react'
import AddIcon from '@mui/icons-material/Add';

const Additems = ({addtask, setaddtask, addmore}) => {
  return (
    <form className="myinput" onSubmit={addmore}>
    <label>Add Items: </label><br />
    <input 
      autoFocus
      type="text"
      name="name"
      placeholder='Add Task'
      value={addtask}
      onChange={(e) =>setaddtask(e.target.value)}
    />

    <button className='btnsubmit' type='submit'>
    <AddIcon />
    </button>
    </form>
  )
}

export default Additems