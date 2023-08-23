import { StyleSheet, Text, View ,Image, KeyboardAvoidingView, TextInput, TouchableOpacity,AccessibilityActionEvent,Alert} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import axios from 'axios';
const UserFormScreen = () => {
  const [email,setEmail]=useState("")
  const [name,setName]=useState("")
  const [joke,setJoke]=useState("")
 
  const handleApicall = async () => {
    const user ={
      name:name,
      email:email
    }

    try {
      const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
      const jokeData = response.data;
      setJoke(jokeData);
      showAlert();
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  };


  const showAlert = () => {
    if (joke) {
      const alertMessage = `Setup: ${joke.setup}\n\nPunchline: ${joke.punchline}`;
      Alert.alert("Joke alert" ,alertMessage);
    }
  };


  return (
   <SafeAreaView style={{flex:1,backgroundColor:'white',alignItems:'center'}}>
    <View>
      <Image
      style={{width:100,height:100, borderRadius:50}}
      source={{uri:"https://pixlok.com/wp-content/uploads/2022/02/Profile-Icon-SVG-09856789.png"}}
      />
    </View>

    <KeyboardAvoidingView>

      <View style={{alignItems:'center'}}>
        <Text style={{fontSize:17,fontWeight:"bold" ,marginTop:12,color:'#041E42'}}>User Login</Text>
      </View>

      <View style={{marginTop:70}}>
         <View style={{flexDirection:'row',alignItems:'center',gap:5,paddingVertical:5,borderRadius:5,marginTop:30,backgroundColor:'#D8D0D0'}}>
         <MaterialIcons style={{marginLeft:8}} name="email" size={24} color="red" />
         <TextInput
         value={email}
         onChange={(text)=>setEmail(text)}
         style={{color:'gray',marginVertical:10,width:300}} placeholder='enter email'/>
         </View>

         <View style={{flexDirection:'row',alignItems:'center',gap:5,paddingVertical:5,borderRadius:5,marginTop:30,backgroundColor:'#D8D0D0'}}>
         <MaterialCommunityIcons style={{marginLeft:8}} name="face-man-profile" size={24} color="red" />
         <TextInput
          value={name}
          onChange={(text)=>setName(text)}
         style={{color:'gray',marginVertical:10,width:300}} placeholder='enter name'/>
         </View>
      </View>
      <TouchableOpacity onPress={handleApicall} style={{width:200,backgroundColor:'red',borderRadius:6,marginLeft:'auto',marginRight:'auto',marginTop:50,padding:14}}>
        <Text style={{alignSelf:'center',color:'white',fontSize:18,fontWeight:'700'}}>Call Api</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
   </SafeAreaView>
  )
}

export default UserFormScreen

const styles = StyleSheet.create({})