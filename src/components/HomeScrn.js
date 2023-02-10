import React,{useState,useEffect} from 'react';
import { Button ,View,Text,Platform,StatusBar,TextInput,Dimensions} from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import Header from './Header';
import  Entypo  from 'react-native-vector-icons/Entypo';
import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import  AntDesign  from 'react-native-vector-icons/AntDesign';
import { Checkbox, TouchableRipple ,Snackbar} from 'react-native-paper';
import { ApiServices } from '../services/Apiservices';
import moment from 'moment';

const height = Dimensions.dev

const HomeScrn = (props) =>{
   const [selectedCatgry,setSelectedCatgry] =useState("Rockets");
   const [menuDatas,setMenuData] = useState([])
   const[visibleSnackBar,setVisibleSnackBar] = useState(false);
   const[deletedTaskName,setDeletedTaskName] = useState('');
   const checkTashFinshed = (index,listName) =>{
      setTimeout(function(){
       
      },500)
   }
   
   const setSelectedCatgryNme = (catagory) =>{
       setSelectedCatgry(catagory)
   }
const onDismissSnackBar = () => setVisibleSnackBar(false);

const updateMenuData = (menuData) =>{
 setMenuData(menuData)
 console.log(menuData[0])
}

  const renderEachItemFromList =({item,index}) =>{
      return(<View name="list-Content-hldr" style={{padding:10}}>
        <TouchableRipple onPress={() =>{props.navigation.navigate("DetailsScrn",{item,selectedCatgry:selectedCatgry})}} style={{borderRadius:20}} borderless={false}>
           <View name="list-content-container" style={{backgroundColor:'#6A5ACD',borderRadius:20,padding:10,flexDirection:'row'}}>
           <View name="row1" style={{flex:1,alignItems:'center',justifyContent:'center'}}>
              <View style={{height:40,width:40,borderColor:"red",borderWidth:1,borderRadius:50,backgroundColor:'#fff',alignItems:'center',justifyContent:'center'}}>
               {selectedCatgry==="History"?<Text style={{fontSize:15,fontWeight:"bold",color:"#6A5ACD"}}>{item.title?item.title.slice(0,2).toUpperCase():""}</Text>:
                <Text style={{fontSize:15,fontWeight:"bold",color:"#6A5ACD"}}>{item.name?item.name.slice(0,2).toUpperCase():""}</Text>}
              </View>
           </View>

           <View name="row2" style={{flex:5}}>
           <View style={{flexDirection:'row',alignItems:'center'}}>
                <Text style={{color:"white",paddingLeft:5}}>{selectedCatgry === "History"?item.title:item.name}</Text>
              </View>
              <View  style={{flexDirection:'row',alignItems:'center',paddingTop:10}}>
              <Text style={{color:"white",paddingLeft:5,fontSize:12}}>{moment(item.event_date_unix).format("ddd, MMM Do YYYY")}</Text>
              </View>
           </View>
           <View name="row3" style={{flex:1.5,alignItems:'center',justifyContent:'center'}}>
                <TouchableRipple style={{backgroundColor:"#fff",borderRadius:20,paddingHorizontal:10,paddingVertical:4}}>
                  <Text style={{color:"#6A5ACD"}}>More</Text>
                </TouchableRipple>
           </View>
           </View>
        </TouchableRipple>
      </View>)
  }
  
  const listEmptyComponent = () =>{
     return(
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
          <AntDesign name="frowno" size={104} color="#6A5ACD" />
          <Text style={{fontSize:26,fontWeight:"bold",color:"#6A5ACD",paddingTop:20}}>Nothing</Text>
          <Text style={{fontSize:26,fontWeight:"bold",color:"#6A5ACD"}}>in {selectedCatgry} !</Text>
      </View>
     )
  }

    return(
        <View style={{flex:1,paddingTop:Platform.OS === "android"?StatusBar.currentHeight:"",backgroundColor:"#fff"}}>
         <View name="Header-holder">
             <Header setSelectedCatgryNme={setSelectedCatgryNme} navigation={props.navigation} updateMenuData={updateMenuData}></Header>
             
         </View>
          <View name="content-container" style={{flex:1,position:'relative'}}>
            <View name="task-container" style={{flex:1,position:'relative'}}>
              <FlatList  contentContainerStyle={{ flexGrow: 1,paddingBottom:100 }} ListEmptyComponent={listEmptyComponent}  data={menuDatas} renderItem={renderEachItemFromList} keyExtractor={(item,index)=> index.toString()}/>

            </View>
          
            <View name="bottom-txt-box" style={{flexDirection:'row',alignItems:'center',justifyContent:"center",paddingVertical:15,paddingHorizontal:15,backgroundColor:"#6A5ACD",width:'100%',position:'absolute',bottom:0}}>
           <Text style={{color:"#fff",fontSize:16}}>SpaceX updations !</Text>
          </View>
         </View>
         <Snackbar duration={2000} visible={visibleSnackBar}  onDismiss={onDismissSnackBar}><Text style={{textAlign:'center',color:"#fff"}}></Text></Snackbar>
        </View>
    )
}

export default HomeScrn;