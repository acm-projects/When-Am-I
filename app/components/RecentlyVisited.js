import firebase from 'react-native-firebase';

export function places(city, state, siteName){
    firebase.firestore().collection('siteNames')


}