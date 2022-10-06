import React, { useEffect } from "react";

const List = ({ data, setData }) => {
  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = () => {
    let books = JSON.parse(localStorage.getItem("book"));
    setData(books);
    console.log("books", books);
    return books;
  };

  const handleDelete = (id) => {
    let books = getBooks();
    let newBooks = books.filter((item) => item.id !== parseInt(id))
    setData(newBooks)
    localStorage.setItem("book", JSON.stringify(newBooks))
  };

  return (
    <>
      {Array.isArray(data) &&
        data.map((item, index) => (
          <article key={index} className="book-item">
            <h3 className="name">
              {item.name} {item.lastname}
            </h3>
            <p className="document">Cédula: {item.document}</p>
            <p className="local_country">País de Origen: {item.localcountry}</p>
            <p className="local_city">Ciudad de Origen: {item.localcity}</p>
            <p className="next_country">País de Destino: {item.nextcountry}</p>
            <p className="next_city">Ciudad de Destino: {item.nextcity}</p>
            <p className="initial_payment">
              Abono Inicial: {item.initialpayment ? item.initialpayment : 0}
            </p>
            <p className="final_payment">
              Abono Final: {item.finalpayment ? item.finalpayment : 0}
            </p>
            <p className="total_payment">
              Abono Total: {item.totalpayment ? item.totalpayment : 0}
            </p>
            <p className="initdate">Fecha Inicial: {item.initdate}</p>
            <p className="finishdate">Fecha Final: {item.finishdate}</p>

            <button className="edit">Editar</button>
            <button className="delete" onClick={() => handleDelete(item.id)}>
              Borrar
            </button>
          </article>
        ))}
    </>
  );
};

export default List;
