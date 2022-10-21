import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const List = ({ data, setData, setEdit, getBooks }) => {
  const handleDelete = (id) => {
    let books = getBooks();
    let newBooks = books.filter((item) => item.id !== parseInt(id));
    setData(newBooks);
    localStorage.setItem("books", JSON.stringify(newBooks));
  };

  const handleEdit = (item) => {
    setEdit(item);
  };

  return (
    <>
      {Array.isArray(data) &&
        data.map((item, index) => (
          <article key={index} className="book-item">
            <h3 className="name">
              {item.name}{" "}{item.lastname}
            </h3>
            <p className="document">Cédula: {item.document}</p>
            <p className="cellphone">Celular: {item.cellphone}</p>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Origen</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <p className="local_country">
                    País: {item.localcountry}
                  </p>
                  <p className="local_city">
                    Ciudad: {item.localcity}
                  </p>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Destino</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <p className="next_country">
                    País: {item.nextcountry}
                  </p>
                  <p className="next_city">
                    Ciudad: {item.nextcity}
                  </p>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Pago</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <p className="initial_payment">
                    Abono Inicial:{" "}
                    {item.initialpayment ? item.initialpayment : 0}
                  </p>
                  <p className="final_payment">
                    Abono Final: {item.finalpayment ? item.finalpayment : 0}
                  </p>
                  <p className="total_payment">
                    Abono Total: {item.totalpayment ? item.totalpayment : 0}
                  </p>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Fechas</Typography>
              </AccordionSummary>
              <AccordionDetails>
                  <p className="initdate">Fecha Inicial: {item.initdate}</p>
                  <p className="finishdate">Fecha Final: {item.finishdate}</p>
              </AccordionDetails>
            </Accordion>

            <button className="edit" onClick={() => handleEdit(item)}>
              Editar
            </button>
            <button className="delete" onClick={() => handleDelete(item.id)}>
              Borrar
            </button>
          </article>
        ))}
    </>
  );
};

export default List;
