import { firebase } from './firebase'
var userDB = firebase.firestore();

function visit(marker)
{
    var user = firebase.auth().currentUser
    if(user)
    {
        var uid = user.uid;
        var docRef = userDB.collection("users").doc(uid);
        
        docRef.get().then(function(doc) {
            if (doc.exists) { // Add the new marker onto the list of visited sites
                var visited = doc.data().visited == null ? [] : doc.data().visited
                
                let duplicate = false
                visited.forEach(element => {    // Test if marker already exists in the user's list
                    if(element.firebaseid == marker.firebaseid)
                    {
                        duplicate = true
                        return
                    }
                })
                if(!duplicate) // If the marker isn't a duplciate, add it to the list
                    visited.unshift(marker) 

                userDB.collection("users").doc(uid).set({    
                    visited: visited
                },{merge:true})
            }
        })
    }
}

function unvisit(marker)
{
    var user = firebase.auth().currentUser
    if(user)
    {
        var uid = user.uid;
        var docRef = userDB.collection("users").doc(uid);
        
        docRef.get().then(function(doc) {
            if (doc.exists) { // Remove the new marker from the list of visited sites
                var visited = doc.data().visited == null ? [] : doc.data().visited
                var newVisited = []

                visited.forEach(element => {    // Search for the marker and add all non matches
                    if(element.firebaseid != marker.firebaseid)
                        newVisited.unshift(element)
                })

                userDB.collection("users").doc(uid).set({    
                    visited: newVisited
                },{merge:true})
            }
        })
    }
}

function checkVisit(marker)
{
    var user = firebase.auth().currentUser
    if(user)
    {
        var docRef = userDB.collection("users").doc(user.uid);
        
        docRef.get().then((doc) => {
            var found = false
            if (doc.exists) { // Add the new markerId onto the list of visited sites
                var visited = doc.data().visited == null ? [] : doc.data().visited

                visited.forEach(element => {    // Test if marker already exists in the user's list
                    if(element.firebaseid == marker.firebaseid)
                    {
                        this.setState({isChecked: true})
                        found = true
                    }    
                })
            }
            if(!found)
                this.setState({isChecked: false})
        })
    }
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

export { createUser, visit, unvisit, checkVisit }