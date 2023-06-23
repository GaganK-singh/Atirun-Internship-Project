import React, { useEffect, useState } from 'react'
import { db } from '../../FirebaseConfig';
import { collection, getDocs, doc, query, where, getDoc } from "firebase/firestore";

export default function List() {

  // const q = query(collection(db, "borrow"), where("status", "==", true));
  const collectionRef = collection(db, "borrow");
  const getdata = async () => {
    // Here in getDocs() Function we either pass collectionRef or q(which is used for query)
    const querySnapshot = await getDocs(collectionRef);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  }

  return (
    <div id="list-content-page">
      <h1>List of Borrowed Books</h1>
      <button type="button" class="btn btn-info" onClick={getdata}>Get List</button>
    </div>
  )
}
