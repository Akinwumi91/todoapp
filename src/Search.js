import React from 'react'

const Search = ({search, setsearch}) => {
  return (
    <form className="mysearch" onChange={(e) => e.preventDefault()}>
    <label>Search: </label><br />
    <input 
      type="text"
      name="name"
      placeholder="Search Task"
      autoFocus
      value={search}
      onChange={(e) => setsearch(e.target.value)}
    />
    </form>
  )
}

export default Search