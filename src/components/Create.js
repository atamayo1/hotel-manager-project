import React, { useState } from "react";
import { saveStorage } from "../helpers/saveStorage";

const Create = ({ setData }) => {
  const title = "Añadir reserva";
  const [bookState, setBookState] = useState({
    document: "",
    name: "",
    lastname: "",
    localcountry: "",
    localcity: "",
    nextcountry: "",
    nextcity: "",
    initdate: "",
    finishdate: "",
    initialpayment: "",
    finalpayment: "",
    totalpayment: "",
  });
  const getFormData = (e) => {
    e.preventDefault();
    let target = e.target;
    let document = target.document.value;
    let name = target.name.value;
    let lastname = target.lastname.value;
    let localcountry = target.localcountry.value;
    let localcity = target.localcity.value;
    let nextcountry = target.nextcountry.value;
    let nextcity = target.nextcity.value;
    let initdate = target.initdate.value;
    let finishdate = target.finishdate.value;
    let initialpayment = target.initialpayment.value;
    let finalpayment = target.finalpayment.value;
    let totalpayment = target.totalpayment.value;

    let book = {
      id: new Date().getTime(),
      document,
      name,
      lastname,
      localcountry,
      localcity,
      nextcountry,
      nextcity,
      initdate,
      finishdate,
      initialpayment,
      finalpayment,
      totalpayment,
    };
    setBookState(book);
    setData((elements) => {
      return [...elements, book];
    });
    saveStorage("book", book);
  };

  return (
    <div className="add">
      <h3 className="title">{title}</h3>
      <strong>
        {bookState.name &&
          bookState.lastname &&
          bookState.document &&
          bookState.localcountry &&
          bookState.localcity &&
          bookState.nextcountry &&
          bookState.nextcity &&
          bookState.initdate &&
          bookState.finishdate &&
          bookState.totalpayment &&
          "Has creado la reserva de: " + bookState.name}
      </strong>
      <form onSubmit={getFormData}>
        <input
          type="number"
          id="document"
          name="document"
          placeholder="Cédula *"
          required
        />
        <input type="text" id="name" name="name" placeholder="Nombre *" />
        <input
          type="text"
          id="lastname"
          name="lastname"
          placeholder="Apellido *"
          required
        />
        <input
          type="text"
          id="localcountry"
          name="localcountry"
          placeholder="País de Origen *"
          required
        />
        <input
          type="text"
          id="localcity"
          name="localcity"
          placeholder="Ciudad de Origen *"
          required
        />
        <input
          type="text"
          id="nextcountry"
          name="nextcountry"
          placeholder="País de Destino *"
          required
        />
        <input
          type="text"
          id="nextcity"
          name="nextcity"
          placeholder="Ciudad de Destino *"
          required
        />
        <input
          type="number"
          id="initialpayment"
          name="initialpayment"
          placeholder="Abono Inicial"
        />
        <input
          type="number"
          id="finalpayment"
          name="finalpayment"
          placeholder="Abono Final"
        />
        <input
          type="number"
          id="totalpayment"
          name="totalpayment"
          placeholder="Abono Total *"
          required
        />
        <p>
          <label>Fecha Inicial *</label>
          <input
            type="date"
            id="initdate"
            name="initdate"
            placeholder="Fecha Inicial *"
            required
          />
        </p>
        <p>
          <label>Fecha Final *</label>
          <input
            type="date"
            id="finishdate"
            name="finishdate"
            placeholder="Fecha Final *"
            required
          />
        </p>
        <input type="submit" id="save" value="Guardar" />
      </form>
    </div>
  );
};

export default Create;
