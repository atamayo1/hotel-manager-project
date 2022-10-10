import React, { useState } from "react";
import { saveStorage } from "../helpers/saveStorage";

const Create = ({ setData, edit, setEdit, getBooks }) => {
  const title = !edit ? "Añadir reserva" : "Editar reserva";
  const [bookState, setBookState] = useState({
    id: "",
    document: "",
    name: "",
    lastname: "",
    cellphone: "",
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
  const saveFormData = (e) => {
    e.preventDefault();
    let target = e.target;
    let id = new Date().getTime();
    let document = target.document.value;
    let name = target.name.value;
    let lastname = target.lastname.value;
    let cellphone = target.cellphone.value;
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
      id,
      document,
      name,
      lastname,
      cellphone,
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
    saveStorage("books", book);
  };

  const updateFormData = (e) => {
    e.preventDefault();
    let target = e.target;

    const books_saved = getBooks();
    const index = books_saved.findIndex((book) => book.id === edit?.id);

    let id = edit?.id;
    let document = target.document.value;
    let name = target.name.value;
    let lastname = target.lastname.value;
    let cellphone = target.cellphone.value;
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
      id,
      document,
      name,
      lastname,
      cellphone,
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

    books_saved[index] = book;

    localStorage.setItem("books", JSON.stringify(books_saved));

    setData(books_saved);
    setEdit();
  };

  return (
    <div className="add">
      <h3 className="title">{title}</h3>
      <strong>
        {bookState.name &&
          bookState.lastname &&
          bookState.document &&
          bookState.cellphone &&
          bookState.localcountry &&
          bookState.localcity &&
          bookState.nextcountry &&
          bookState.nextcity &&
          bookState.initdate &&
          bookState.finishdate &&
          bookState.totalpayment &&
          "Has creado la reserva de: " + bookState.name}
        {edit && "Estas editando la reserva de: " + edit?.name}
      </strong>

      <form onSubmit={edit ? updateFormData : saveFormData}>
        <input
          type="number"
          id="document"
          name="document"
          placeholder="Cédula *"
          defaultValue={edit?.document}
          min={0}
          required
        />
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Nombre *"
          defaultValue={edit?.name}
        />
        <input
          type="text"
          id="lastname"
          name="lastname"
          placeholder="Apellido *"
          defaultValue={edit?.lastname}
          required
        />
        <input
          type="tel"
          id="cellphone"
          name="cellphone"
          placeholder="+573123452299"
          pattern="[+][0-9]{2}[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}"
          defaultValue={edit?.cellphone}
          required
        ></input>
        <input
          type="text"
          id="localcountry"
          name="localcountry"
          placeholder="País de Origen *"
          defaultValue={edit?.localcountry}
          required
        />
        <input
          type="text"
          id="localcity"
          name="localcity"
          placeholder="Ciudad de Origen *"
          defaultValue={edit?.localcity}
          required
        />
        <input
          type="text"
          id="nextcountry"
          name="nextcountry"
          placeholder="País de Destino *"
          defaultValue={edit?.nextcountry}
          required
        />
        <input
          type="text"
          id="nextcity"
          name="nextcity"
          placeholder="Ciudad de Destino *"
          defaultValue={edit?.nextcity}
          required
        />
        <input
          type="number"
          id="initialpayment"
          name="initialpayment"
          placeholder="Abono Inicial"
          defaultValue={edit?.initialpayment}
          min={0}
        />
        <input
          type="number"
          id="finalpayment"
          name="finalpayment"
          placeholder="Abono Final"
          defaultValue={edit?.finalpayment}
          min={0}
        />
        <input
          type="number"
          id="totalpayment"
          name="totalpayment"
          placeholder="Abono Total *"
          defaultValue={edit?.totalpayment}
          min={0}
          required
        />
        <p>
          <label>Fecha Inicial *</label>
          <input
            type="date"
            id="initdate"
            name="initdate"
            placeholder="Fecha Inicial *"
            defaultValue={edit?.initdate}
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
            defaultValue={edit?.finishdate}
            required
          />
        </p>
        <input
          type="submit"
          id="save"
          value={edit ? "Actualizar" : "Guardar"}
        />{" "}
        {edit && (
          <input
            type="button"
            id="reset"
            value="Resetear"
            onClick={() => setEdit()}
          />
        )}
      </form>
    </div>
  );
};

export default Create;
