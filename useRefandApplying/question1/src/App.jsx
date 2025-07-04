import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const charactersPerPage=10;
    const [characters,setCharacters]=useState([])
    const [paginatedData,setPaginatedData]=useState([])
    const [pages,setPages]=useState([])
    const currentPageRef=useRef(1)

    useEffect(() => {
      const fetchCharacters = async () => {
        let allCharacters = [];
        let nextURL = "https://rickandmortyapi.com/api/character";
  
        while (nextURL) {
          const res = await fetch(nextURL);
          const data = await res.json();
          allCharacters = [...allCharacters, ...data.results];
          nextURL = data.info.next;
        }
  
        setCharacters(allCharacters);
      };
  
      fetchCharacters();
    }, []);

    useEffect(() => {
      const totalPages = Math.ceil(characters.length / charactersPerPage);
      const newPages = Array.from({ length: totalPages }, (_, i) => i + 1);
      setPages(newPages);
      updatePage(currentPageRef.current);
    }, [characters]);

    const updatePage = (pageNumber) => {
      currentPageRef.current = pageNumber;
      const startIndex = (pageNumber - 1) * charactersPerPage;
      const selected = characters.slice(startIndex, startIndex + charactersPerPage);
      setPaginatedData(selected);
    };

  return (
    <>
      <div className="container">
      <h1>Rick & Morty Characters</h1>
      <div className="grid">
        {paginatedData.map((char) => (
          <div key={char.id} className="card">
            <img src={char.image} alt={char.name} />
            <p>{char.name}</p>
          </div>
        ))}
      </div>

      <div className="pagination">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => updatePage(page)}
            className={currentPageRef.current === page ? "active" : ""}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
    </>
  )
}

export default App
