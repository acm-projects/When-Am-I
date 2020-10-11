import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableHighlight, ScrollView, Platform } from 'react-native';

const PrevioslyVisited = () => {
    return(
        <TouchableHighlight style={styles.button}>
        <View style={styles.column}>
          <Text style={styles.buttonSiteText}> siteName </Text>
          <Text style={styles.buttonInfoText}> City, State </Text>
        </View>
      </TouchableHighlight>
    );
}


const styles = StyleSheet.create({ 
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

export default PrevioslyVisited;