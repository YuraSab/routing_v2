import React, {createContext, useState} from 'react';


export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null);

  const signIn = (newsUer, cb) => {
    setUser(newsUer);
    cb();
  }

  const signOut = (cb) => {
    setUser(null);
    cb();
  }


  const value = {user, signIn, signOut};

  return (
    <div>
        <AuthContext.Provider value={value}>
          {children}
        </AuthContext.Provider>
    </div>
  )
}

