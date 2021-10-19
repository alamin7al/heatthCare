import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initializaatuntication=()=>{
    initializeApp(firebaseConfig);
}

export default initializaatuntication