import React, { useState } from "react";

export default function Borrow() {
  const { currentState, setCurrentState } = useState({
    bookName: "",
    LibId: "",
    quantity: ""
  });


  let name, value;
  const changed = (prop) => {
    name = prop.target.name;
    value = prop.target.value;

    setCurrentState(...currentState, [name]=value);
  }


  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Name Of the book:
          </label>
          <input
            className="form-control"
            type="text"
            name="bookName"
            placeholder="eg:- The Alchemist"
            aria-label="default input example"
            value={currentState.bookName}
            onChange={changed}
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Library ID:
          </label>
          <input
            className="form-control"
            type="text"
            name="LibId"
            placeholder="eg:- LIB2023131313"
            aria-label="default input example"
            value={currentState.LibId}
            onChange={changed}
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Quantity:
          </label>
          <input
            className="form-control"
            type="text"
            name="quantity"
            placeholder="eg:- 5"
            aria-label="default input example"
            value={currentState.quantity}
            onChange={changed}
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
