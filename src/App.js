import Create from "./components/Create";
import List from "./components/List";
import Search from "./components/Search";
import KingBedIcon from "@mui/icons-material/KingBed";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState();

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = () => {
    let books = JSON.parse(localStorage.getItem("books"));
    setData(books);
    return books;
  };

  return (
    <div className="layout">
      <header className="header">
        <div className="logo">
          <KingBedIcon />
        </div>

        <h1>MisReservas</h1>
      </header>

      <nav className="nav">
        <ul>
          <li>
            <a href="/#">Reservas</a>
          </li>
        </ul>
      </nav>

      <section id="content" className="content">
        <List
          data={data}
          setData={setData}
          setEdit={setEdit}
          getBooks={getBooks}
        />
      </section>

      <aside className="lateral">
        <Search data={data} setData={setData} />
        <Create
          setData={setData}
          edit={edit}
          setEdit={setEdit}
          getBooks={getBooks}
        />
      </aside>

      <footer className="footer">
        &copy; Máster en React -{" "}
        <a href="https://victorroblesweb.es">victorroblesweb.es</a>
      </footer>
    </div>
  );
}

export default App;
