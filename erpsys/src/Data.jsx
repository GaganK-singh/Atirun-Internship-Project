import React, { useState } from "react";
import { db } from "../src/FirebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export default function Data() {
  const [borrowEntries, setBorrowEntries] = useState([]);

  async function borrows(db) {
    const collectn = collection(db, "erpsys1");
    const userInstnce = await getDocs(collectn);
    
    
  }

  return <></>;
}

// const erpsys = db.collection("erpsys1");

// await erpsys.doc("docu1").set({
//   BookName: "Name of the book",
//   LibraryID: "LibID",
//   Quantity: 1,
// });
