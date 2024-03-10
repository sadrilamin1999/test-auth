import { useState } from "react";
import { AuthContext } from "../context/AuthContext";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const auth = getAuth(app);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userInfo = { user, createUser };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
