import Header from "./Header";
// import Footer from "./Footer";
import Content from "./Content";
import Additems from "./Additems";
import Search from "./Search";
import { useState, useEffect } from 'react'
import apirequest from "./apirequest";

function App() {
const posturl = 'http://localhost:3600/tasks'
const[tasks, settasks] = useState([])
const[addtask, setaddtask] = useState('')
const[search, setsearch] = useState('')
const[fetcherror, setfetcherror] = useState(null)
const[isloading, setisloading] = useState(true)

useEffect(() =>{
  const fetchtask = async () =>{
    try{
      const response = await fetch(posturl)
      if(!response.ok) throw Error('expected data not found')
      const taskitems = await response.json()
      settasks(taskitems)
      setfetcherror(null)
    }catch(error){
      setfetcherror(error.message)
    }finally{
      setisloading(false)
    }
  }

  setTimeout(() =>{
    (async () => await fetchtask())()
  }, 2000)
}, [])

const addmoretask = async (task) => {
  const id = tasks.length ? tasks [tasks.length - 1 ].id + 1 : 1
  const newtask = {id, checked:false, task}
  const taskitems = [...tasks, newtask]
  settasks(taskitems)

  const taskpost = {
    method: "POST",
    headers:{
      'content-type' : 'application/json'
    },
    body: JSON.stringify(newtask)
  }

  const result = await apirequest(posturl, taskpost)
  if(result) setfetcherror(result)
}

const handlecheck = async (id) =>{
    const taskitems = tasks.map(task => task.id === id ? {...task, checked: !task.checked}: task)
    settasks(taskitems)

    const mytask = taskitems.filter(task => task.id === id)
    const checktask ={
      method: "PATCH",
      headers:{
        "content-type" : "application/json"
      },
      body: JSON.stringify({checked: mytask[0].checked})
    }
    const requrl = `${posturl}/${id}`
    const result = await apirequest(requrl, checktask)
    if(result) setfetcherror(result)
} 
const handledelete = async (id)=>{
    const taskitems = tasks.filter(task => task.id !== id)
    settasks(taskitems)

    const deletetask = {
      method: "DELETE"
    }
    const requrl = `${posturl}/${id}`
    const result = await apirequest(requrl, deletetask)
    if(result) setfetcherror(result)

}
const addmore = (e) =>{
  e.preventDefault()
  if(!addtask)return
  addmoretask(addtask)
  setaddtask('')

}
  return (
    <div className="Apphead">
    <div className="App">
    <Header />
    <Additems 
      addtask={addtask}
      setaddtask={setaddtask}
      addmore={addmore}
    />
    <Search 
      search={search}
      setsearch = {setsearch}
    />
    <main>
    {isloading && <p>Loading...</p>}
    {fetcherror && <p style={{color:"red"}}>{`Error: ${fetcherror}`}</p>}
    {!fetcherror && !isloading &&
      <Content
    tasks={tasks.filter(task =>((task.task).toLowerCase()).includes(search.toLowerCase()))}
    settasks={settasks}
    handlecheck={handlecheck}
    handledelete={handledelete}
     />
    }
     </main>
    {/* <Footer length ={tasks.length} />    */}
    </div>
    </div>
  );
}

export default App;
