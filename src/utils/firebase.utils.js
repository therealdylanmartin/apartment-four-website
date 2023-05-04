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
  setDoc,
  updateDoc,
  collection,
  query
} from 'firebase/firestore';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL
} from "firebase/storage";
// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // firebase config needed for app to work
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);
// const analytics = getAnalytics(firebaseApp);

// Setup GoogleAuthProvider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const signOutAdminUser = async () => await signOut(auth);

export const db = getFirestore();

export const createAdminUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'admin-users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (userSnapshot.exists()) {
    return userDocRef;
  } else {
    return await signOut(auth);
  }
}

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);

export const getRecipesAndDocuments = async () => {
  const collectionRef = collection(db, 'recipes');
  const recipesQuery = query(collectionRef);
  const querySnapshot = await getDocs(recipesQuery);

  const recipesMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const data = docSnapshot.data();
    const recipeId = docSnapshot.id;

    acc[recipeId] = { ...data, recipeId };

    return acc;
  }, {})

  return recipesMap;
}

export const getSingleRecipeDocument = async (recipeId) => {
  const recipeSnapshot = await getDoc(doc(db, 'recipes', recipeId.replace(/-/g, ' ')));

  if (recipeSnapshot.exists()) {
    const data = recipeSnapshot.data();
    return data;
  } else {
    console.log("Can't find that document");
    return 404;
  }
}

export const createSingleRecipeDocument = async (recipeId, newRecipe) => {
  const recipeRef = doc(db, 'recipes', recipeId);

  await setDoc(recipeRef, newRecipe);
  console.log('Recipe added!');
}

export const updateSingleRecipeDocument = async (recipeId, updatedRecipe) => {
  const recipeRef = doc(db, 'recipes', recipeId);

  await updateDoc(recipeRef, updatedRecipe);
  console.log('Recipe updated!');
}

export const uploadImageToStorage = async (image) => {
  // Upload image to the object
  const storageRef = ref(storage, image.name);
  const uploadTask = await uploadBytesResumable(storageRef, image);
  const imagePath = await getDownloadURL(uploadTask.ref);

  return imagePath;
}
