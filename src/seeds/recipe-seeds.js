const { getFirestore, doc, collection, writeBatch } = require('firebase/firestore');

const { initializeApp } = require('firebase/app');

const RECIPES_DATA = require('../data/data');

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBBumh2rzwpB8JzvbOVRfp04FKoCD2XFfQ',
  authDomain: 'apartment-four.firebaseapp.com',
  projectId: 'apartment-four',
  storageBucket: 'apartment-four.appspot.com',
  messagingSenderId: '771213336216',
  appId: '1:771213336216:web:8d7895160d2edb1a703aed',
  measurementId: 'G-2FWM3M9TKR'
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach(object => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  })

  await batch.commit();
  console.log('Recipes database has been seeded!');

  process.exit(0);
}

addCollectionAndDocuments('recipes', RECIPES_DATA);