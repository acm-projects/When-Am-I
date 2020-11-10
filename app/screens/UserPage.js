import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, Dimensions, TouchableHighlight, ScrollView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PreviouslyVisited from '../components/VisitedButton';
import { auth, signOut } from '../components/UserAuth'
import { firebase } from '../components/firebase'


class UserPage extends Component {

  state = {
    name: "Signed Out",
    visited: [],
  }
    
  componentDidMount() {
    auth.onAuthStateChanged((userAuth) => {
      if(userAuth)  // If user is logged in
      {
        firebase.firestore().collection("users").doc(userAuth.uid) // When the user's data updates, reset the state variables
        .onSnapshot((doc) => {
          let data = doc.data()
          this.setState({
            name: data.name,
            visited: data.visited
          })
        });
      }
      else // If user logged out
      {
        this.setState({
          name: "Signed Out",
          visited: []
        })
      }
    });
  }

  getStatistics() 
  {
    if(this.state.visited != null)
    {
      var newChurches = 0

      this.state.visited.forEach((marker)=>{
        var code = marker.code
        if(code.includes("churches")) newChurches++
      })

      return({
        churches: newChurches,
      })
    }
  }

  render()
  {
    if(this.state.name == "Signed Out")
    {
      var statistics = this.getStatistics()
    return (
      <View style = {styles.base}>
        <ScrollView>
          <SafeAreaView>
            <View>
                <View style = {styles.ProfilePic}>
                    <Image source = {require('../assets/logo.jpg')} 
                    style = {{ width: Dimensions.get("window").width/6, height: Dimensions.get("window").width/6, borderRadius: (Dimensions.get("window").width/5)/2 }}/>
                </View>
              </View>

              <View style = {styles.ProfileName}>
                  <Text style = {styles.ProfileText}>{this.state.name}</Text>
              </View>

              <TouchableOpacity style={styles.logButton} onPress={()=>
                    this.props.navigation.navigate('Login')
                    }>
                      <Text style = {{alignSelf: 'center'}}>Sign In</Text>  
                </TouchableOpacity> 

              <View style = {styles.statBox}>
                <Text style = {styles.BoxText}>User Statistics</Text>
                <ScrollView>
                  
                    <Text style = {styles.numVisited}>Visited {this.state.visited==null ? 0 : this.state.visited.length} / 12941 Total</Text>
                    <Text style = {styles.numVisited}>Visited {statistics==null ? 0 : statistics.churches} / 1903 Churches</Text>
                    <Text style = {styles.numVisited}>Visited 10 / 15 State Courts</Text>
                    <Text style = {styles.numVisited}>Visited 2 / 100 Confederate Memorials</Text>
                    <Text style = {styles.numVisited}>Visited 120 / 1300 Plantations</Text>
                    <Text style = {styles.numVisited}>Visited 120 / 1300 Rodeos</Text>
                    <Text style = {styles.numVisited}>Visited 12 / 15000 Total</Text>
                  
                </ScrollView>
              </View>
              
              <View style = {styles.preVisitedBox}>

                <Text style = {styles.BoxText}> Previously Visited </Text>
                {this.state.visited==null || this.state.visited.length==0 ? 
                  <PreviouslyVisited title="Sign in and visit some markers!" />
                : <ScrollView>
                  {this.state.visited.map((marker) => {
                    return(
                      <PreviouslyVisited key={marker.firebaseid} title={marker.title} city={marker.city} />
                    )}
                  )}
                  </ScrollView>}

            </View>
          </SafeAreaView>
        </ScrollView>
      </View>
    )
  }
  else
  {
    var statistics = this.getStatistics()
    return (
      <View style = {styles.base}>
        <ScrollView>
          <SafeAreaView>
            <View>
                <View style = {styles.ProfilePic}>
                    <Image source = {require('../assets/logo.jpg')} 
                    style = {{ width: Dimensions.get("window").width/6, height: Dimensions.get("window").width/6, borderRadius: (Dimensions.get("window").width/5)/2 }}/>
                </View>

                <View style = {styles.ProfileName}>
                  <Text style = {styles.ProfileText}>{this.state.name}</Text>
                </View>
              </View>
              
              <View style= {{alignSelf: 'center'}}>
                <TouchableOpacity style={styles.logButton} onPress={()=>signOut.bind(this)()}>
                  <Text>Sign Out</Text>  
                </TouchableOpacity> 
              </View>

              <View style = {styles.statBox}>
                <Text style = {styles.BoxText}>User Statistics</Text>
                <ScrollView>
                  
                    <Text style = {styles.numVisited}>Visited {this.state.visited==null ? 0 : this.state.visited.length} / 12941 Total</Text>
                    <Text style = {styles.numVisited}>Visited {statistics==null ? 0 : statistics.churches} / 1903 Churches</Text>
                    <Text style = {styles.numVisited}>Visited 10 / 15 State Courts</Text>
                    <Text style = {styles.numVisited}>Visited 2 / 100 Confederate Memorials</Text>
                    <Text style = {styles.numVisited}>Visited 120 / 1300 Plantations</Text>
                    <Text style = {styles.numVisited}>Visited 120 / 1300 Rodeos</Text>
                    <Text style = {styles.numVisited}>Visited 12 / 15000 Total</Text>
                  
                </ScrollView>
              </View>
              
              <View style = {styles.preVisitedBox}>

                <Text style = {styles.BoxText}> Previously Visited </Text>
                {this.state.visited==null || this.state.visited.length==0 ? 
                  <PreviouslyVisited title="Visit some markers!" />
                : <ScrollView>
                  {this.state.visited.map((marker) => {
                    return(
                      <TouchableHighlight style={styles.buttonPV} 
                      onPress={() => 
                        this.props.navigation.navigate('Details', {markerInfo: marker})
                        }>
                          <PreviouslyVisited key={marker.firebaseid} title={marker.title} city={marker.city} 
                      />
                      </TouchableHighlight>
                    )}
                  )}
                  </ScrollView>}

            </View>
          </SafeAreaView>
        </ScrollView>
      </View>
    )
  }
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
    justifyContent: 'center',
    marginLeft: (Dimensions.get("window").width/5),
    marginTop: -Dimensions.get("window").width/9,
  },
  ProfileText: {
    color: '#fff',
    fontSize: (Dimensions.get("window").width/15),
    alignSelf: 'stretch',
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
  buttonPV: {
    flex:1,
    margin: 10,
    padding: 10,
    borderRadius: 25,
    alignSelf: "stretch",
    alignContent: 'center',
    backgroundColor: '#CBAF87',
    shadowColor: '#000000',
    shadowOpacity: 0.4,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 4,
  },
  logButton: {
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#cbaf87',
    borderRadius: 30,
    alignSelf: 'stretch',
  },
})

export default UserPage
