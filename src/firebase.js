import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA74Jnlsn3J-8-lJKsTRKjEN9F7w_E5y3c",
  authDomain: "tasting-club-29edc.firebaseapp.com",
  projectId: "tasting-club-29edc",
  storageBucket: "tasting-club-29edc.appspot.com",
  messagingSenderId: "322481257203",
  appId: "1:322481257203:web:f9213b31a183db1f73d586",
  measurementId: "G-ZCXHVJQRCH"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { firebaseApp, auth };