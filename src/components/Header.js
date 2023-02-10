import React,{useState,useEffect} from 'react';
import {View,StyleSheet,Text} from 'react-native';
import  Ionicons  from 'react-native-vector-icons/Ionicons';
import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableRipple} from 'react-native-paper';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ApiServices } from '../services/Apiservices';


const Header = (props) =>{
    const [visible, setVisible] = useState(false);
    const [catagories,setCatagories] = useState(["Rockets","History","Launches"])
    const [selectedCatgry,setSelectedCatgry] =useState("Rockets");
    const hideMenu = () => setVisible(false);
    const showMenu = () => setVisible(true);

    useEffect(() =>{
        ApiServices.getSpacXRockets().then(res =>{
           props.updateMenuData(res)
        })
    },[])

    const signOut = async () =>{ // need to add
        let data = await AsyncStorage.clear().then(res =>{
            props.navigation.navigate("SignIn")
        });
      }

      const getSelectedMenuData = (catagory) =>{
        props.setSelectedCatgryNme(catagory)
        setSelectedCatgry(catagory)
        hideMenu();
      if(catagory === "Rockets"){
         ApiServices.getSpacXRockets().then(res =>{
            props.updateMenuData(res)
         })
      }
      if(catagory === "History"){
        ApiServices.getSpaceXHistory().then(res =>{
            props.updateMenuData(res)
         })
      }
      if(catagory === "Launches"){
        ApiServices.getSpaceXLaunches().then(res =>{
            props.updateMenuData(res)
         })
      }

      }

    return(
        <View style={{overflow:'hidden',paddingBottom:5}}>
           <View name="header-container" style={styles.headerContainerStyle}>
            <View name="header-content" style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View name="row1" style={{flexDirection:'row',alignItems:'center'}}>
                   <Ionicons name="ios-rocket" size={32} color="#6A5ACD" />
                   <Text style={{paddingHorizontal:15,fontSize:18,fontWeight:'bold'}}>{selectedCatgry}</Text>
                   <MaterialIcons name="arrow-drop-down" size={24} color="black" onPress={showMenu}/>
                   <Menu visible={visible} onRequestClose={hideMenu} style={{left:250,top:50}}>
                    {catagories.map((catagory,index) =>(
                        <TouchableRipple key={index} rippleColor={"#6A5ACD"} onPress={() =>{getSelectedMenuData(catagory)}}>
                           <View style={{width:200,padding:10,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                               <View style={{flexDirection:'row',alignItems:'center'}}>
                              {catagory==="Rockets"?<MaterialCommunityIcons name="rocket-outline" size={24} color="black" />:<></>}
                               {catagory === "History"?<MaterialCommunityIcons name="history" size={24} color="black"/>:<></>}
                               {catagory === "Launches"?<MaterialCommunityIcons name="rocket-launch" size={24} color="black"/>:<></>}
                                <Text style={{color:"#000",fontSize:17,paddingLeft:10}}>{catagory}</Text>
                                </View>
                                <View>
                       
                                </View>
                           </View>
                        </TouchableRipple>
                    ))}
                  </Menu>
                </View>
                <View name="row2" style={{flexDirection:'row',alignItems:'center'}}>
                   <TouchableRipple onPress={()=>{signOut()}} rippleColor={"#6A5ACD"}>
                    <Text style={{color:"#6A5ACD",paddingRight:10,fontWeight:'bold'}} >Sign-out</Text>
                   </TouchableRipple>
                </View>
            </View>
            {/* <TouchableRipple style={styles.rippleStyle} borderless={true} onPress={() =>{console.log("hdghdghd")}}>
              <Ionicons name="checkmark-circle" size={30} color="#6A5ACD" />
            </TouchableRipple> */}
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainerStyle : {
       paddingHorizontal:12,
       paddingVertical:8,
       borderBottomColor:"#E6E6FA",
       backgroundColor:'#fff',
       borderBottomWidth:0.5,
       shadowColor: '#000',
       shadowOffset: { width: 1, height: 1 },
       shadowOpacity:  0.4,
       shadowRadius: 3,
       elevation: 5,
    },
    rippleStyle:{
        borderRadius:50,
    },
  
})

export default Header;