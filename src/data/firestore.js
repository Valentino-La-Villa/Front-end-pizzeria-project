
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, getFirestore } from 'firebase/firestore'

const environment = import.meta.env

const firebaseConfig = {
    apiKey: environment.VITE_FIRESTORE_API_KEY,
    authDomain: environment.VITE_FIRESTORE_AUTH_DOMAIN,
    projectId: environment.VITE_FIRESTORE_PROJECT_ID,
    storageBucket: environment.VITE_FIRESTORE_STORAGE_BUCKET,
    messagingSenderId: environment.VITE_FIRESTORE_MESSAGING_SENDER_ID,
    appId: environment.VITE_FIRESTORE_APP_ID,
    measurementId: environment.VITE_FIRESTORE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const database = getFirestore()

export const productsCollection = collection(database, 'products')
export const branchesCollection = collection(database, 'branches')
export const ordersCollection = collection(database, 'orders')