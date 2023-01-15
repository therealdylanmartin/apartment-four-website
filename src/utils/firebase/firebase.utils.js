// Import the functions you need from the SDKs you need
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  collection,
  writeBatch,
  query
} from 'firebase/firestore';
// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);

// Setup GoogleAuthProvider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach(object => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  })

  await batch.commit();
  console.log('done');
}

export const getRecipesAndDocuments = async () => {
  const collectionRef = collection(db, 'recipes');
  const recipesQuery = query(collectionRef);
  const querySnapshot = await getDocs(recipesQuery);

  const recipesMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const data = docSnapshot.data();
    const { title } = data;

    acc[title.toLowerCase()] = data;

    return acc;
  }, {})

  const recipes = Object.values(recipesMap);

  return recipes;
}

export const createAdminUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'admin-users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (userSnapshot.exists()) {
    return userDocRef;
  } else {
    return await signOut(auth);
  }
}

export const signOutAdminUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);