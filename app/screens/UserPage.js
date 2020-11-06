import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, Button, View, Image, Dimensions, TouchableHighlight, ScrollView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PrevioslyVisited from '../components/VisitedButton';
import { auth, signOut } from '../components/UserAuth'
import { firebase } from '../components/firebase'

const {height , width} = Dimensions.get("window");

class UserPage extends Component {

  state = {
    uid: 0,
    name: "Signed Out",
    visited: []
  }

  componentDidMount() {
    auth.onAuthStateChanged((userAuth) => {
      if(userAuth)  // If user is logged in
      {
        this.setState({uid:userAuth.uid})
        firebase.firestore().collection("users").doc(userAuth.uid) // When the user's data updates, reset the state variables
        .onSnapshot((doc) => {
          this.setState({visited:doc.data().visited})
        });
      }
      else // If user logged out
      {
        this.setState({
          uid: 0,
          name: "Signed Out",
          visited: []
        })
      }
    });
  }

  render() {
    return (
      <View style = {styles.base}>
        <ScrollView>
          <SafeAreaView>
              <View style = {styles.ProfilePic}>
                  <Image source = {require('../assets/logo.jpg')} 
                  style = {{ width: Dimensions.get("window").width/6, height: Dimensions.get("window").width/6, borderRadius: (Dimensions.get("window").width/5)/2 }}/>
              </View>
              <View style = {styles.ProfileName}>
                <Text style = {styles.ProfileText}> FirstName LastName </Text>
                <Button title="Sign Out" onPress={()=>signOut.bind(this)()} />
              </View>
              <View style = {styles.statBox}>
                <Text style = {styles.BoxText}>User Statistics</Text>
                <ScrollView>
                  
                    <Text style = {styles.numVisited}>Visited {this.state.visited==null ? 0 : this.state.visited.length} / 16734 Total</Text>
                    <Text style = {styles.numVisited}>Visited 1 / 150  Civil War Locations</Text>
                    <Text style = {styles.numVisited}>Visited 10 / 15 State Courts</Text>
                    <Text style = {styles.numVisited}>Visited 2 / 100 Confederate Memorials</Text>
                    <Text style = {styles.numVisited}>Visited 120 / 1300 Plantations</Text>
                    <Text style = {styles.numVisited}>Visited 120 / 1300 Rodeos</Text>
                    <Text style = {styles.numVisited}>Visited 12 / 15000 Total</Text>
                  
                </ScrollView>
              </View>
              <View style = {styles.preVisitedBox}>
                <Text style = {styles.BoxText}> Previously Visited </Text>
                <ScrollView>
                  
                    <PrevioslyVisited/>
                    <PrevioslyVisited/>
                    <PrevioslyVisited/>
                    <PrevioslyVisited/>
                    <PrevioslyVisited/>
                  
                </ScrollView>
            </View>
          </SafeAreaView>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({ 
  base: {
    flex: 1,
    backgroundColor: '#30475E',
    flexDirection: 'column',
  },
  ProfilePic:{
    flex: 1,
    //padding: Dimensions.get("window").width/50,
    marginTop: Dimensions.get("window").width/50,
    marginLeft: (Dimensions.get("window").width/5)/4,
  },
  ProfileName: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: (Dimensions.get("window").width/5),
    marginTop: -Dimensions.get("window").width/9,
  },
  ProfileText: {
    color: '#fff',
    fontSize: (Dimensions.get("window").width/13),
  },
  statBox: {
    flex: 4,
    borderRadius: 35,
    marginTop: (Dimensions.get("window").width/20),
    width: (Dimensions.get("window").width*(12/13)),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#F0ECE3',
    paddingBottom: 15,
  },
  statBoxStats: {
    alignItems: 'flex-start',
    backgroundColor: '#F0ECE3',
  },
  numVisited: {
    padding: 5,
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#30475E',
    textAlign: 'center',
  },
  BoxText: {
    color: '#30475E',
    fontSize: 30,
    fontWeight: 'bold',
    //marginTop: -(Dimensions.get("window").height)/200,
    textAlign: 'center',
    marginTop: 10,
  },
  preVisitedBox: {
    flex: 6,
    borderRadius: 40,
    marginTop: (Dimensions.get("window").height)/50,
    width: (Dimensions.get("window").width*(12/13)),
    backgroundColor: '#F0ECE3',
    alignSelf: 'center',
    paddingBottom: 15,
  },
  buttonSiteText: {
    textAlign: 'left',
    fontSize: 25,
    color: '#30475E',
  },
  buttonInfoText:{
    textAlign: 'left',
    fontSize: 20,
    marginLeft: 15,
    fontStyle: 'italic',
    color: '#30475E',
  },
  button: {
    flex:1,
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 40,
    alignSelf: "stretch",
    backgroundColor: '#CBAF87',
  },
})

export default UserPage
