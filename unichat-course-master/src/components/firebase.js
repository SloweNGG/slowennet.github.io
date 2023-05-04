import {initializeApp} from "firebase/app";
import { getAnalytics } from "firebase/analytics"
import { getAuth, createUserWithEmailPassword,updateCurrentUser } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZtGXd9uKIKaRjisfUMHSU6hCur7qUHYg",
  authDomain: "slowenchats-d9cae.firebaseapp.com",
  projectId: "slowenchats-d9cae",
  storageBucket: "slowenchats-d9cae.appspot.com",
  messagingSenderId: "50925116785",
  appId: "1:50925116785:web:e9ce803541443f7f09aad0",
  measurementId: "G-7K9PDHGQW4"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);  
const auth = getAuth(app)


const singUp = async (name, email, password) => {
  await createUserWithEmailPassword(auth, email, password);
  await updateCurrentUser(auth, {displayName: name })
};  

const singIn = (email, password) => {

}