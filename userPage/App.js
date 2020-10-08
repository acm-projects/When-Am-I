import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableHighlight } from 'react-native';

const {height , width} = Dimensions.get("window");
/*
function PreviouslyVisitedSites({ siteName, city, state }){
  return(
<TouchableHighlight style={styles.statBox}>
  <View style={styles.row}>
    <Text style={styles.Text}> siteName, city, state </Text>
  </View>
</TouchableHighlight>
  )
}
*/

const UserPage = () => (
  <View style = {styles.base}>
    <View style = {styles.ProfilePic}>
        <Image source = {require('./assets/logo.jpg')} 
        style = {{ width: Dimensions.get("window").width/5, height: Dimensions.get("window").width/5, borderRadius: (Dimensions.get("window").width/5)/2 }}/>
    </View>
    <View style = {styles.ProfileName}>
       <Text style = {styles.ProfileText}> FirstName LastName </Text>
    </View>
    <View style = {styles.statBox}>
      <Text style = {styles.statBoxText}> Stats n Stuff</Text>
      <Image source = {require('./assets/badge.png')} 
        style = {{ width: Dimensions.get("window").width/5, height: Dimensions.get("window").width/5, borderRadius: (Dimensions.get("window").width/5)/2, flexDirection: 'row', justifyContent: 'flex-start' }}/>
      <Text style = {styles.numVisited}> Visited 12 / 15000 </Text>
    </View>
    <View style = {styles.preVisitedBox}>
      <Text style = {styles.preVisitedBoxText}> Previously Visited </Text>
      <TouchableHighlight style={styles.button}>
        <View style={styles.column}>
          <Text style={styles.buttonSiteText}> siteName </Text>
          <Text style={styles.buttonInfoText}> City, State </Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight style={styles.button}>
        <View style={styles.column}>
          <Text style={styles.buttonSiteText}> siteName </Text>
          <Text style={styles.buttonInfoText}> City, State </Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight style={styles.button}>
        <View style={styles.column}>
          <Text style={styles.buttonSiteText}> siteName </Text>
          <Text style={styles.buttonInfoText}> City, State </Text>
        </View>
      </TouchableHighlight>
      
    </View>
  </View>
)


const styles = StyleSheet.create({ 
  base: {
    flex: 1,
    backgroundColor: '#30475E',
    flexDirection: 'column',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  ProfilePic:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: Dimensions.get("window").width/9,
    marginLeft: (Dimensions.get("window").width/5)/7,
  },
  ProfileName: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: (Dimensions.get("window").width/5) + 10,
    marginTop: -Dimensions.get("window").width/6,

  },
  ProfileText: {
    color: '#fff',
    fontSize: (Dimensions.get("window").width/5)/3,
    textShadowColor: '#CBAF87',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius : 10
  },
  statBox: {
    width: (Dimensions.get("window").width),
    height:  (Dimensions.get("window").height/3.5),
    borderRadius: 50,
    marginTop: (Dimensions.get("window").width/10),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0ECE3',
  },
  statBoxText: {
    color: '#30475E',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: -(Dimensions.get("window").height)/12,
  },
  preVisitedBoxText: {  
    color: '#30475E',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: -(Dimensions.get("window").height)/200,
    textAlign: 'center',
    marginTop: 5,
  },
  preVisitedBox: {
    width: (Dimensions.get("window").width),
    height: (Dimensions.get("window").height/1.7)-50,
    borderRadius: 50,
    marginTop: (Dimensions.get("window").height)/50,
    marginBottom: 10,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F0ECE3',
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
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 40,
    alignSelf: "stretch",
    backgroundColor: '#CBAF87',
  },
  numVisited: {
    textAlign: 'center',
    fontSize: 25,
    justifyContent: 'center',
    fontStyle: 'italic',
    color: '#30475E',
    padding: (Dimensions.get("window").width/10),
    marginBottom: ((Dimensions.get("window").height/10) - (Dimensions.get("window").height/3.5))/2 ,
  }
})
export default UserPage