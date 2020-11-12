import { firebase } from './firebase'

var auth = firebase.auth()

function signUp(email, password)
{
    auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      // successful creation
      var user = firebase.auth().currentUser
      firebase.firestore().collection("users").doc(user.uid).set({
        name: user.email,
      },{merge:true})
    })
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode + " " + errorMessage)
    })
}

function signIn(email, password)
{
    auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      // successful login
    })
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode + " " + errorMessage)
    })
}

function signOut()
{
    auth.signOut()
    .then(() => {
      // Successful signout
    })
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode + " " + errorMessage)
    })
}

function forgotPassword(email) 
{
  auth.sendPasswordResetEmail(String(email))
}

export { auth, signUp, signIn, signOut, forgotPassword }