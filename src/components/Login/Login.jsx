import React, { useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.init";






const Login = () => {

  const auth = getAuth(app);

  const provider = new GoogleAuthProvider();
  
  const githubProvider = new GithubAuthProvider()


  const [user, setUser] = useState(null);


  // gogle
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const logginuser = result.user;
        console.log(logginuser);
        setUser(logginuser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const handleSgnOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

// github

const handleGithubSignIn=() =>{
 signInWithPopup(auth,githubProvider)
 .then(result =>{
  const githublogged = result.user
  console.log(githublogged)
  setUser(githublogged)
 })
 .catch(error =>{
  console.log(error)
 })


} 












  return (
    <div>
      {/* user ? logout : sign in */}

      {user ? (
        <button onClick={handleSgnOut}>Sign out</button>
      ) :  <> 

        <button onClick={handleGoogleSignIn}>log in</button>
        <button onClick={handleGithubSignIn}>github in</button>
      </>
       
      }
      {user && (
        <div>
          <h3>User: {user.displayName}</h3>
          <h3>User: {user.email}</h3>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
