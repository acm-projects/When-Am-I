import React, { Component, useState} from 'react';
import { TouchableOpacity, Image, Dimensions, ScrollView, SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TouchableHighlight } from 'react-native';
import { Alert, Button,} from 'react-native';
import { TextInput } from 'react-native-paper';
import { signIn, signUp } from '../components/UserAuth'

const {height , width} = Dimensions.get("window");

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: "",
      password: "",
    };
  }

  go = () => {
           const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (reg.test(this.state.email) === true){
               alert('valid');
           }
           else{
               alert();
           }
 
  }

  render() {
    return (
      
      <View style={styles1.container}>
        <View style = {{flexDirection: 'row', padding: 10, alignContent: 'center'}}>
        <Image source = {require('../assets/logo.jpg')} 
            style = {{ width: (Dimensions.get("window").width/6) -25, height: (Dimensions.get("window").width/6)-21, borderRadius: 200 }}/>
      <Text style={styles1.inputext}>When Am I</Text>
      </View>
      
        <TextInput
          value={this.state.username}
          
          onChangeText={(username) => this.setState({ username })}
           label='Email'
          style={styles1.input}
          underlineColorAndroid={'transparent'}
          theme={{colors: '#30475E'}}

        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          label='Password'
          secureTextEntry={true}
          theme={{colors: '#30475E'}}
          style={styles1.input}
          underlineColorAndroid={'transparent'}
        />
        <View style = {{flexDirection: 'row', padding: 10, alignContent: 'center', justifyContent: 'space-evenly'}}>
        <TouchableOpacity
          title={'Login'}
          style={styles1.logButton}
          onPress={()=>signIn.bind(this)(this.state.username,this.state.password)}
        >
        <Text style={styles1.buttonText}> Login </Text>
        </TouchableOpacity>

        <TouchableOpacity
          title={'Register'}
          style={styles1.logButton}
          onPress={()=>signUp.bind(this)(this.state.username,this.state.password)}
        >
          <Text style={styles1.buttonText}> Register </Text>
        </TouchableOpacity>
        <TouchableOpacity
          title={'Skip'}
          style={styles1.logButton}
          onPress={()=>
            this.props.navigation.navigate('Map')

          }
        >
          <Text style={styles1.buttonText}> Register </Text>
        </TouchableOpacity>
        </View>
      </View>
      
    );
  }
}

const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#30475E',
  },
  input: {
    width: 300,
    height: 50,
    padding: 10,
    backgroundColor: '#e7dec8',
    marginBottom: 10,
  },
  logButton: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#cbaf87',
    borderRadius: 30,
    shadowColor: '#000000',
    shadowOpacity: 0.4,
    marginHorizontal: 15,
    paddingHorizontal: 15,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 4,
  },
  buttonText: {
    color: '#30475E',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  inputext: {
    padding: 10,
    textAlign:'center',
    fontWeight:'bold',
    color: '#e7dec8',
    fontSize: 35,
  },
  
});