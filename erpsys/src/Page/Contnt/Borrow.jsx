import React from "react";

export default function Borrow() {
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
            placeholder="eg:- The Alchemist"
            aria-label="default input example"
          />
        </div><br />
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Library ID:
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="eg:- LIB2023131313"
            aria-label="default input example"
          />
        </div><br />
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Quantity:
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="eg:- 5"
            aria-label="default input example"
          />
        </div><br />  
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
