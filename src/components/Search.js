import React, { useState } from "react";

const Search = ({ data, setData }) => {
  const [search, setSearch] = useState()
  const [isNotFound, setIsNotFound] = useState(false)

  const searchBook = (e) => {
    setSearch(e.target.value)

    let found_books = data.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))

    if(search.length <= 1 || found_books <= 0){
      found_books = JSON.parse(localStorage.getItem("books"));
      setIsNotFound(true)
    }else{
      setIsNotFound(false)
    }

    setData(found_books)
  }

  return (
    <div className="search">
      <h3 className="title">Buscador: {search}</h3>
      {(isNotFound && search.length > 1) && <span className="not-found">No se ha encontrado ninguna coincidencia</span>}
      <form>
        <input type="text" id="search_field" onChange={searchBook} />
        <button id="search">Buscar</button>
      </form>
    </div>
  );
};

export default Search;
