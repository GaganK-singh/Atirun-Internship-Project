import React, { useEffect, useState } from 'react'
import { db } from '../../FirebaseConfig';
import { collection, getDocs } from "firebase/firestore";

export default function List() {
  async function setBorrow(db) {
    const colRefBorrow = collection(db, "borrow");
    const userInstnce = await getDocs(colRefBorrow);
    const userList = userInstnce.docs.map(doc => doc.data);
    console.log(userList);
  }
  useEffect(() => { setBorrow(db); })


  return (
    <div id="list-content-page">List</div>
  )
}
