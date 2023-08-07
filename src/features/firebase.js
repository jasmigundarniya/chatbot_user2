import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';

// const firebaseConfig = {
//   apiKey: "AIzaSyChiLA-l57xOWh9Cn2KQ7yaLIIpHR4B0M8",
//   authDomain: "admin-50d39.firebaseapp.com",
//   databaseURL: "https://admin-50d39-default-rtdb.firebaseio.com",
//   projectId: "admin-50d39",
//   storageBucket: "admin-50d39.appspot.com",
//   messagingSenderId: "404896442945",
//   appId: "1:404896442945:web:21cf731dda69466ff1f4c0",
//   measurementId: "G-CBLX4F22XE"
// };

const firebaseConfig = {
  apiKey: "AIzaSyD0JePL-Y8BvXvr1_QPCzhySWFAJYFl2Cw",
  authDomain: "chatbot-fc1e9.firebaseapp.com",
  projectId: "chatbot-fc1e9",
  storageBucket: "chatbot-fc1e9.appspot.com",
  messagingSenderId: "329532410815",
  appId: "1:329532410815:web:472a125f81dab150d2af0a",
  measurementId: "G-G1K70ETJFH"
};

const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

export { ref, onValue, database as default };
