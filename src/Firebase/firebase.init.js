import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
// };

const firebaseConfig = {
    apiKey: "AIzaSyAg2Je5PmKFwfvvbjrsuo_CzoMg_61LxDk",
    authDomain: "game-of-rl.firebaseapp.com",
    projectId: "game-of-rl",
    storageBucket: "game-of-rl.appspot.com",
    messagingSenderId: "821345527583",
    appId: "1:821345527583:web:2c5b36a0b25060db86b22a"
  };
  
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;