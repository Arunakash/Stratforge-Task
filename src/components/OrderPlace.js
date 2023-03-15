import React,{useEffect,useState} from 'react';
import {View,Text,ActivityIndicator} from 'react-native';
import  Ionicons from "react-native-vector-icons/Ionicons";

const OrderScrn = (props) =>{
    const[isLoaderVisible,setIsLoaderVisible] = useState(true)
    useEffect(() =>{
       setTimeout(()=>{setIsLoaderVisible(false),goHome()},2000)
    },[])

   const goHome =() =>{
    setTimeout(()=>{ props.navigation.replace("Home")},2000)
   }
     return(
        <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"#fff"}}>
           {isLoaderVisible?<ActivityIndicator style={{position:"absolute",top:0,bottom:0,right:0,left:0}} size={"large"} color="#041c5e"></ActivityIndicator>:
               <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
               <Ionicons name="checkmark" size={24} color="black" />
                     <Text style={{fontSize:22}}>Order Placed</Text>
               </View>
         }

        </View>
    )
}

export default OrderScrn;