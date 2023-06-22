import React, { useEffect, useState } from "react";
import { db } from "../../FirebaseConfig";
import { getFirestore, collection, getDocs, addDoc, setDoc } from "firebase/firestore";

export default function Borrow() {
  const [currentState, setCurrentState] = useState({
    bookName: "",
    LibId: "",
    quantity: ""
  });

  const postData = (tag) => {
    const name = tag.target.name;
    const value = tag.target.value;

    setCurrentState({ ...currentState, [name]: value });
  };


  async function setBorrow(db) {
    const colRefBorrow = collection(db, "borrow");
    const userInstnce = await getDocs(colRefBorrow);
    const userList = userInstnce.docs.map(doc => doc.data);
    console.log(userList);
  }

  // useEffect(() => { setBorrow(db); })

  

  const saveData = async () => {
    await setDoc(collection(db, "borrow"), {currentState});
    console.log(currentState.quantity)
  }

  const clearData = () => {
    setCurrentState({
      bookName: "",
      LibId: "",
      quantity: ""
    });
  }

  return (
    <div>
      <form id="borrowForm" method="get">
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
            onChange={postData}
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
            // value={currentState.LibId}
            onChange={postData}
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
            // value={currentState.quantity}
            onChange={postData}
          />
        </div>
        <br />
        <button type="submit" id="borrowFormSubmit" className="btn btn-primary" onClick={saveData}>
          Submit
        </button>
        <button type="reset" id="resetFormSubmit" className="btn btn-primary" onClick={clearData}>
          Clear Data
        </button>
      </form>
    </div>
  );
}
