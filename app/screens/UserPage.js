
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableHighlight, ScrollView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PrevioslyVisited from '../components/VisitedButton';

const {height , width} = Dimensions.get("window");

const UserPage = () => (
<View style = {styles.base}>
  <ScrollView>
    <SafeAreaView>
        <View style = {styles.ProfilePic}>
            <Image source = {require('../assets/logo.jpg')} 
            style = {{ width: Dimensions.get("window").width/6, height: Dimensions.get("window").width/6, borderRadius: (Dimensions.get("window").width/5)/2 }}/>
        </View>
        <View style = {styles.ProfileName}>
          <Text style = {styles.ProfileText}> FirstName LastName </Text>
        </View>
        <View style = {styles.statBox}>
          <Text style = {styles.BoxText}> Stats n Stuff</Text>
          <ScrollView>
            <View style = {styles.statBoxStats}>
              <Text style = {styles.numVisited}> Visited 12 / 15000 Total </Text>
              <Text style = {styles.numVisited}> Visited 1 / 150  Civil War Locations</Text>
              <Text style = {styles.numVisited}> Visited 10 / 15 State Courts</Text>
              <Text style = {styles.numVisited}> Visited 2 / 100 Confederate Memorials</Text>
              <Text style = {styles.numVisited}> Visited 120 / 1300 Plantations </Text>
              <Text style = {styles.numVisited}> Visited 120 / 1300 Rodeos </Text>
              <Text style = {styles.numVisited}> Visited 12 / 15000 Total </Text>
            </View>
          </ScrollView>
        </View>
        <View style = {styles.preVisitedBox}>
          <Text style = {styles.BoxText}> Previously Visited </Text>
          <ScrollView>
            <View style = {styles.preVisitedBox}>
              <PrevioslyVisited/>
              <PrevioslyVisited/>
              <PrevioslyVisited/>
              <PrevioslyVisited/>
              <PrevioslyVisited/>
            </View>
          </ScrollView>
      </View>
    </SafeAreaView>
  </ScrollView>
</View>
)

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
    fontSize: (Dimensions.get("window").width/5)/3,
    textShadowColor: '#CBAF87',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius : 10
  },
  statBox: {
    flex: 4,
    borderRadius: 35,
    marginTop: (Dimensions.get("window").width/50),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0ECE3',
  },
  statBoxStats: {
    alignItems: 'flex-start',
    backgroundColor: '#F0ECE3',
  },
  numVisited: {
    padding: 5,
    fontSize: 15,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#30475E',
  },
  BoxText: {
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
