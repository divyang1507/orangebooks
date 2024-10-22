// import mongoose from 'mongoose';

// let isConnected = false; // Track the connection status

// const connectToDatabase = async () => {
//   if (isConnected) {
//     console.log('Already connected to the database');
//     return;
//   }

//   try {
//     await mongoose.connect(process.env.MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     isConnected = true;
//     console.log('Connected to MongoDB');
//   } catch (error) {
//     console.error('Failed to connect to MongoDB:', error);
//   }
// };

// export default connectToDatabase;


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.DB_APIKEY,
//   authDomain: process.env.DB_AUTHDOMAIN,
//   projectId: process.env.DB_PROJECTID,
//   storageBucket: process.env.DB_STORAGEBUCKET,
//   messagingSenderId: process.env.DB_MESSAGINGSENDERID,
//   appId: process.env.DB_APPID,
//   measurementId: process.env.DB_MEASUREMENTI,
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
//  const db = getFirestore(app); // For Cloud Firestore

// //  const analytics = getAnalytics(app);

//  export {db }