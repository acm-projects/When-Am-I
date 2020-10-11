
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableHighlight, ScrollView, Platform } from 'react-native';
import PrevioslyVisited from './components/VisitedButton';

const {height , width} = Dimensions.get("window");

const UserPage = () => (
    <>
    <View style = {styles.ProfilePic}>
        <Image source = {require('../assets/logo.jpg')} 
        style = {{ width: Dimensions.get("window").width/6, height: Dimensions.get("window").width/6, borderRadius: (Dimensions.get("window").width/5)/2 }}/>
    </View>
    <View style = {styles.ProfileName}>
       <Text style = {styles.ProfileText}> FirstName LastName </Text>
    </View>
    <View style = {styles.statBox}>
      <Text style = {styles.statBoxText}> Stats n Stuff</Text>
      <View style = {styles.badges}>
        <Image source = {require('../assets/badge.png')}   
          style = {{ width: Dimensions.get("window").width/5.5, height: Dimensions.get("window").width/5, borderRadius: (Dimensions.get("window").width/5)/2, flexDirection: 'row', justifyContent: 'flex-start' }}/>
      </View>
      <Text style = {styles.numVisited}> Visited 12 / 15000 </Text>
    </View>
    <View style = {styles.preVisitedBox}>
      <Text style = {styles.preVisitedBoxText}> Previously Visited </Text>
      <ScrollView>
        <View style = {styles.preVisitedBox}>
          <PrevioslyVisited/>
          <PrevioslyVisited/>
          <PrevioslyVisited/>
          <PrevioslyVisited/>
          <PrevioslyVisited/>
          <PrevioslyVisited/>
        </View>
      </ScrollView>
  </View>
  </>
  
)

const styles = StyleSheet.create({ 
  base: {
    flex: 1,
    backgroundColor: '#30475E',
    flexDirection: 'column',
  },
  ProfilePic:{
    flex: 1,
    marginTop: Dimensions.get("window").width/10,
    marginLeft: (Dimensions.get("window").width/5)/4,
  },
  ProfileName: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: (Dimensions.get("window").width/5) + 10,
    marginTop: -Dimensions.get("window").width/8,
  },
  ProfileText: {
    color: '#fff',
    fontSize: (Dimensions.get("window").width/5)/3,
    textShadowColor: '#CBAF87',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius : 10
  },
  statBox: {
    flex: 4,
    borderRadius: 50,
    marginTop: (Dimensions.get("window").width/10),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0ECE3',
  },
  badges: {
    flex: 1,
    alignItems: 'center',
  },
  numVisited: {
    flex: 1, 
    marginTop: (Dimensions.get("window").width/8),
    fontSize: 25,
    fontStyle: 'italic',
    color: '#30475E',
  },
  statBoxText: {
    flex: 1,
    color: '#30475E',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30,
    fontWeight: 'bold',
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
    flex: 6,
    borderRadius: 50,
    marginTop: (Dimensions.get("window").height)/50,
    marginBottom: (Dimensions.get("window").height)/100,
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
