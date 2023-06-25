import React from 'react'
import { db } from '../../FirebaseConfig';
import { collection, getDocs} from "firebase/firestore";

export default function List() {
  // const q = query(collection(db, "borrow"), where("status", "==", true));
  const collectionRef = collection(db, "borrow");

  const getdata = async () => {
    delChild();
    // Here in getDocs() Function we either pass collectionRef or q(which is used for query)
    // We can use query to sort and search data through a particular name or id (this helps admin the most)

    const querySnapshot = await getDocs(collectionRef);

    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      let continuum = doc.data().bookName;
      const nodee = document.createElement("li");
      const textnode = document.createTextNode(continuum);
      nodee.appendChild(textnode);
      document.getElementById("bookList").appendChild(nodee);
    });

    // Another way to get data in list or say JSON form
    // const userList = querySnapshot.docs.map((doc) => doc.data());
    // console.log("Hey", "=" , userList);
  }

  const delChild = () => {
    const bookList1 = document.getElementById("bookList");
    while (bookList1.firstChild) {
      bookList1.removeChild(bookList1.firstChild);
    }
  }

  return (
    <div id="list-content-page">
      <h1>List of Borrowed Books</h1>
      <button type="button" class="btn btn-info" onClick={getdata}>Get List</button><br /> <br />
      <div>
        <ul class="list-group" id='bookList'></ul>
      </div>
    </div>
  )
}
