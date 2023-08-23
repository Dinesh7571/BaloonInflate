import React, { useState } from 'react';
import {
    Text,
  View,
  Button,
  Animated,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import UserFormScreen from './UserFormScreen';
const Home = () => {
  const navigation = useNavigation();
  const [animation] = useState(new Animated.Value(1));

  const inflateBalloon = () => {
    Animated.sequence([
      Animated.timing(animation, {
        toValue: 1.5,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.timing(animation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }),
    ]).start();
  };

  return (
    <SafeAreaView style={{ paddingTop:25 }}>

    <View style={{flexDirection:'row',alignContent:'space-between'}}>
         <View style={{alignSelf:'center'}}> 
            <Text style={{fontWeight:'800',fontSize:20}}> HomeScreen </Text> 
         </View>

        <View>
            <TouchableOpacity style={{marginLeft:170,alignSelf:'center'}} onPress={() => navigation.navigate('UserForm')}>
           <Image
           source={{uri: 'https://pixlok.com/wp-content/uploads/2022/02/Profile-Icon-SVG-09856789.png'}}
           style={{ width: 50, height: 50, borderRadius:50 ,margin:8}}
           />
           </TouchableOpacity>
        </View> 
        
        </View>
      

      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Animated.View
          style={{
            marginTop:40,
          
            transform: [{ scale: animation }],
          }}
        >
           
           <Image
          source={require("../assets/baloon.png")}
          style={{ width:200, height:300,}}
         />
      


            </Animated.View>
        <TouchableOpacity  style={{backgroundColor:'blue',padding:10,borderRadius:8}} onPress={inflateBalloon}>
            <Text style={{color:'white',fontWeight:'800'}}>Animate</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
