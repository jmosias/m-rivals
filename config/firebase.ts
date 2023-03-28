// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getAnalytics} from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCoYW7ifATFCQ1WZB8tniHwc8GA1MBnsag',
  authDomain: 'mrivals-app.firebaseapp.com',
  projectId: 'mrivals-app',
  storageBucket: 'mrivals-app.appspot.com',
  messagingSenderId: '24728938885',
  appId: '1:24728938885:web:6a397bd7959a18b16dfcec',
  measurementId: 'G-T9FRZ2TESN',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
