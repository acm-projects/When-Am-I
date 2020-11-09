const firebase = require("firebase");
export { firebase }

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

export function queryCoord(latitudeSearch, longitudeSearch, radius) {
    let latRadius = 0.01449275362*radius // Convert radius in miles to decimal degrees
    let lngRadius = 0.01694915254*radius

    if(radius == -1 || radius > 70)    // If radius is -1 or >70 miles search the whole database
    {
        db.ref('/').once('value').then((snapshot) => {
            let newList = [];
            snapshot.forEach((snap) => {
                var obj = snap.val();
                var lat = obj.latitude;    // Marker's coordinates
                var lng = obj.longitude;  

                // If marker is in the search radius, add its name to the list, -1 to search all
                if(radius==-1 || (Math.abs(latitudeSearch-lat) <= latRadius && Math.abs(longitudeSearch-lng) <= lngRadius)) { 
                    newList.push(obj)
                }
            });
            this.setState({ list: newList });
        });
    }
    else    // Limit query by the latitude radius, faster for <70 mile radius
    {
        db.ref('/').orderByChild("latitude").startAt(latitudeSearch-latRadius).endAt(latitudeSearch+latRadius).once('value').then((snapshot) => {
            let newList = [];

            snapshot.forEach((snap) => {
                var obj = snap.val();
                var lng = obj.longitude;  

                // Latitude guaranteed to be in radius, if longitude is then add to the new list
                if(Math.abs(longitudeSearch-lng) <= lngRadius) { 
                    newList.push(obj)
                }
            });
            this.setState({ list: newList });
        });
    }
}