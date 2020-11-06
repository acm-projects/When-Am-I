import { firebase } from './firebase'

var auth = firebase.auth()

function signUp(email, password)
{
    auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      // successful creation
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
export { auth, signUp, signIn, signOut }