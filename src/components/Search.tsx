import React, { useState } from 'react';
import Results from './Results';

const Search = () => {

  const [searchTerm, setSearchTerm] = useState("")
  const [gameResults, setGameResults] = useState([])

  const handleChange = (e:any) => {
    setSearchTerm(e.target.value)
  }

  const enterHandler = (e:any) => {
    if (e.key === "Enter") {
      e.preventDefault()
      let slug = searchTerm.split(' ').join('-').toLowerCase()
      setGameResults([])
      fetch(`https://rawg.io/api/games?search=${slug}&key=952d287c927344c9bf73dc7afd0ab555`)
        .then(resp => resp.json())
        .then(({results}) => {
          results === undefined ? alert('no games found') : setGameResults(results)
        })
      setSearchTerm("")
  }
  }

  const onSubmit = (e:any) => {
    e.preventDefault()
    let slug = searchTerm.split(' ').join('-').toLowerCase()

    setGameResults([])
    fetch(`https://rawg.io/api/games?search=${slug}&key=952d287c927344c9bf73dc7afd0ab555`)
    .then(resp => resp.json())
    .then(({results}) => {
        results === undefined ? alert('no games found') : setGameResults(results)
    })
    setSearchTerm("")
  }

  return (
    <div className="game-search rounded-lg shadow-md w-11/12 m-auto">
      <h1>Game Search</h1>
        <form onSubmit={onSubmit}>
          <input type="text" value={searchTerm} onChange={handleChange} onKeyUp={enterHandler}/>
          <br></br>
          <input type="submit"/>
        </form>
        <Results gameResults={gameResults} />
    </div>
  );
}

export default Search;