const firebase = require("firebase");
try {
    firebase.initializeApp({
        apiKey: "AIzaSyAyLXoloras4WyizpQY_ldCYoj452wqdPo",
        authDomain: "when-am-i-89851.firebaseapp.com",
        databaseURL: "https://when-am-i-89851.firebaseio.com",
        projectId: "when-am-i-89851",
        storageBucket: "when-am-i-89851.appspot.com",
        messagingSenderId: "1071509202117",
        appId: "1:1071509202117:web:ff52b7cb118da6a927fcac",
        measurementId: "G-D752GTYPN7"
    });
} catch (err) {
    // we skip the "already exists" message which is not an actual error when we're hot-reloading
    if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack)
    }
}

  
var db = firebase.database();

export function queryCoord(eastCoord, northCoord, radius) {
    db.ref('/').once('value').then((snapshot) => {
        let newList = [];
        snapshot.forEach((snap) => {
            var obj = snap.val();
            var east = obj.utm_east;    // Marker's coordinates
            var north = obj.utm_north;  

            // If marker is in the search radius, add its name to the list, -1 to search all
            if(radius==-1 || (Math.abs(eastCoord-east) <= radius && Math.abs(northCoord-north) <= radius)) { 
                newList = [...newList, obj];
            }
        });
        this.setState({ list: newList });
    });
}