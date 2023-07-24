 
  // Import the functions you need from the SDKs you need
  import { getStorage } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  import { getFirestore , doc, setDoc, collection, snapshotEqual} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";


  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCV1Y8nNm_dkMjYGeSVqrKb27e-ud2behc",
    authDomain: "waitlist-data-4c143.firebaseapp.com",
    projectId: "waitlist-data-4c143",
    storageBucket: "waitlist-data-4c143.appspot.com",
    messagingSenderId: "971607464345",
    appId: "1:971607464345:web:17f530de72248b8da69b08",
    measurementId: "G-10PZMLXBDC"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


  const analytics = getAnalytics(app);
  const db = getFirestore(app);
  const store= getStorage(app)

console.log(app.name);  // "[DEFAULT]"

defaultStorage = firebase.storage();

const contact = collection(db,'contact');
const email= doc(db,'funke@gmail.com')

console.log(contact, email)
// const snapshot = await  getDocs(email)


// Add a new document in collection "cities"
// await setDoc(doc(db, "cities", "LA"), {
//   name: "Los Angeles",
//   state: "CA",
//   country: "USA"
// });