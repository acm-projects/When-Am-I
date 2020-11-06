import { firebase } from './firebase'
var userDB = firebase.firestore();

function visit(markerId)
{
    var user = firebase.auth().currentUser
    if(user)
    {
        var uid = user.uid;
        var docRef = firebase.firestore().collection("users").doc(uid);
        
        docRef.get().then(function(doc) {
            if (doc.exists) { // Add the new markerId onto the list of visited sites
                var oldVisited = doc.data().visited == null ? [] : doc.data().visited
                var newVisited = [...oldVisited, markerId]
                
                userDB.collection("users").doc(uid).set({    
                    visited: newVisited
                },{merge:true})
            }
        })
    }
}

function unVisit(markerId)
{
    // Remove marker from visited array and set database
}

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      createUser(user)
    } else {
        // No user is signed in.
    }
});
  

function createUser(user)
{
    userDB.collection("users").doc(user.uid).set({
        name: user.email,
    },{merge:true})
}


function getUserData(userAuth)
{
    if(userAuth==null)  // If no user is signed in
        this.setState({
            uid: 0,
            name: "Signed Out",
            visited: []
        })
    else
    {
        this.setState({    // If user is signed in, return some of their data
            uid: userAuth.uid,
            name: "",
            visited: []
        })
    }
}
export { createUser, visit }