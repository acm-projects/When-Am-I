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
    statistics: {}
  }
    
  componentDidMount() {
    auth.onAuthStateChanged((userAuth) => {
      if(userAuth)  // If user is logged in
      {
        firebase.firestore().collection("users").doc(userAuth.uid) // When the user's data updates, reset the state variables
        .onSnapshot((doc) => {
          let data = doc.data()

          var stats = this.getStatistics(data.visited)

          this.setState({
            name: data.name,
            visited: data.visited,
            statistics: stats
          })
        });
      }
      else // If user logged out
      {
        this.setState({
          name: "Signed Out",
          visited: [],
          statistics: {}
        })
      }
    });
  }

  getStatistics(visited) 
  {
    if(visited != null)
    {
      var churches=0,graveyards=0,revolution=0,civilwar=0,women=0,ghosttowns=0,outlaws=0

      for(var i in visited)
      {
        var code = visited[i].code
        if(code.includes("churches")) churches++
        if(code.includes("graveyards")) graveyards++
        if(code.includes("Texas Revolution")) revolution++
        if(code.includes("Civil War")) civilwar++
        if(code.includes("women")) women++
        if(code.includes("ghost towns")) ghosttowns++
        if(code.includes("outlaws")) outlaws++
      }

      return({
        churches: churches,
        graveyards: graveyards,
        revolution: revolution,
        civilwar: civilwar,
        women: women,
        ghosttowns: ghosttowns,
        outlaws: outlaws,
      })
    }
    return {}
  }

  render()
  {
    if(this.state.name == "Signed Out")
    {
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
                <Text style = {styles.BoxText}>Sign in to track your visits!</Text>
              </View>
              
          </SafeAreaView>
        </ScrollView>
      </View>
    )
  }
  else
  {
    var stats = this.state.statistics
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
                  
                    <Text style = {styles.numVisited}>{this.state.visited==null ? 0 : this.state.visited.length} / 12941 Total</Text>
                    <Text style = {styles.numVisited}>{stats.churches==null ? 0 : stats.churches} / 1903 Churches</Text>
                    <Text style = {styles.numVisited}>{stats.graveyards==null ? 0 : stats.graveyards} / 1647 Graveyards</Text>
                    <Text style = {styles.numVisited}>{stats.revolution==null ? 0 : stats.revolution} / 557 Texas Revolution</Text>
                    <Text style = {styles.numVisited}>{stats.civilwar==null ? 0 : stats.civilwar} / 463 Civil War</Text>
                    <Text style = {styles.numVisited}>{stats.women==null ? 0 : stats.women} / 341 Women's History</Text>
                    <Text style = {styles.numVisited}>{stats.ghosttowns==null ? 0 : stats.ghosttowns} / 286 Ghost Towns</Text>
                    <Text style = {styles.numVisited}>{stats.outlaws==null ? 0 : stats.outlaws} / 48 Outlaws</Text>
                  
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
                  </ScrollView>
                }

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
