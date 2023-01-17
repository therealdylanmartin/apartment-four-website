import { createContext, useState, useEffect } from 'react';
import { createAdminUserDocumentFromAuth, onAuthStateChangedListener } from '../utils/firebase.utils';

export const AdminUserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null
})

export const AdminUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createAdminUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    })

    return unsubscribe;
  }, [])

  return <AdminUserContext.Provider value={value}>{children}</AdminUserContext.Provider>;
}