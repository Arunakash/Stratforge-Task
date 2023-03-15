import React,{useState,useEffect} from 'react';
import { Button ,View,Text,Platform,StatusBar,TextInput,Dimensions, ImageBackground,Image,StyleSheet} from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { TouchableRipple } from 'react-native-paper';
import  AntDesign  from 'react-native-vector-icons/AntDesign';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import  Feather  from 'react-native-vector-icons/Feather';
import { useSelector,useDispatch } from 'react-redux';
import { addFoodItem, removeFoodItem } from '../Store/Store';


const height = Dimensions.dev
const width = Dimensions.width
const HomeScrn = (props) =>{

const [isViewCartDisabled,setIsViewCartDisabled] =useState(false);
const [cartItemsCount,setCartItemsCount] = useState(0)
const state = useSelector((state) => state);
const dispatch = useDispatch();

const getCartCount = () =>{
return state.menuItems.reduce((acc,curr) => {
  acc = acc+curr.addedCount;
  return acc
},0);
}

const addItem = (id)=>{
  dispatch(addFoodItem({id}))
 setCartItemsCount(getCartCount())
}

const removeItem = (id) =>{
 dispatch(removeFoodItem({id}))
 setCartItemsCount(getCartCount())
}

useEffect(()=>{
  setCartItemsCount(getCartCount())
console.log("homeeee")
},[state])

  const renderItem = ({item,index}) =>{
    return(<View style={{width:"100%"}}>
      <View style={{flex:1,flexDirection:"row",paddingBottom:15}}>
        <View style={{flex:1}}>
          
          <View style={styles.specBoxStyle}>
          <View style={styles.innerSpecBox}>
            <Text style={styles.specTxt}>N</Text>
          </View>
          </View>
          
          <View style={styles.specBoxStyle}>
          <View style={styles.innerSpecBox}>
            <Text style={styles.specTxt}>D</Text>
          </View>
          </View>
        </View>
        <View style={{flex:8,paddingLeft:5}}>
          <Text style={{fontSize:15,paddingVertical:5}}>{item.name}</Text>
          <Text style={{fontSize:12,paddingVertical:5}}>{item.ingridnts}</Text>
          <Text style={{fontSize:17,paddingVertical:5,color:"#ff9800"}}>${item.price}</Text>
        </View>
        <View style={{flex:3}}>
          <View style={styles.addItemBox}>
            <TouchableRipple onPress={() =>{removeItem(item.id)}}>
              <AntDesign name="minus" size={16} color="black" />
            </TouchableRipple>
            <Text>{item.addedCount}</Text>
            <TouchableRipple onPress={() =>{addItem(item.id)}}>
             <AntDesign name="plus" size={16} color="black" />
            </TouchableRipple>
          </View>
        </View>
      </View>
    </View>)
  }

    return(
        <View style={{position:"relative",flex:1,paddingTop:Platform.OS === "android"?StatusBar.currentHeight:"",backgroundColor:"#fff"}}>
          <View style={{flex:1}}>
             <View style={{flex:1}}>
                <ImageBackground source={require('../components/assets/Images/food3.jpeg')} style={{position:"relative",flex:1,resizeMode: 'cover'}}>
                  <View style={styles.bookBtnHldr}>
                    <View style={styles.nameCard}>
                        <Text style={{fontSize:22,paddingBottom:20}}>Inka Restaurant</Text>
                        <Text style={{color:"grey"}}><AntDesign name="staro" size={10} color="black" /> 5.0(200+) | All days : 09:00 AM- 06:00 PM</Text>
                        <Text style={{paddingBottom:20}}><Feather name="phone-call" size={17} color="black" />   React us at : 9845655667</Text>
                    <TouchableRipple style={{borderRadius:5,backgroundColor:"#041c5e",paddingHorizontal:12,paddingVertical:6}}>
                      <Text style={{color:"#fff"}}>BOOK A TABLE</Text>
                    </TouchableRipple>
                    </View>
                  </View>
                </ImageBackground>
             </View>
             <View style={{flex:2.5,paddingTop:120}}>
                <View style={{flex:1,paddingTop:20,paddingHorizontal:20}}>
                   <Text style={{fontSize:20,paddingBottom:20}}>Starter</Text>
                   <FlatList showsVerticalScrollIndicator={false} data={state.menuItems}renderItem={renderItem} keyExtractor={(eachItem,index)=> index.toString()}></FlatList>
                </View>
             </View>
          </View>
          <TouchableRipple onPress={() =>{props.navigation.navigate("Cart")}} disabled={cartItemsCount > 0? false:true}>
          <View name="bottom-bar" style={[styles.viewCrtBtn,{opacity:cartItemsCount > 0?10:0.7}]}>
          <MaterialCommunityIcons name="cart-variant" size={24} color="#fff" style={{paddingRight:5}}/>
                <Text style={{color:"#fff"}}>View Cart ({cartItemsCount} items)</Text>
          </View>
          </TouchableRipple>
        </View>
    )
}

export default HomeScrn;

const styles= StyleSheet.create({
  specBoxStyle : {
    flexDirection:"row"
    ,marginBottom:10,
    alignItems:"flex-start",
    justifyContent:"flex-start"
  },
  innerSpecBox:{height:25,
    width:25,
    borderColor:"gray",
    borderWidth:0.5,
    borderRadius:4,
    alignItems:"center",
    justifyContent:"center"
  },
  specTxt:{
    textAlign:"left",
  },
  addItemBox:{
    flexDirection:"row",
    padding:4,
    justifyContent:"space-between",
    alignItems:"center",
    borderColor:"#ff9800",
    borderWidth:1
  },
  bookBtnHldr:{
    padding:20,
    height:200,
    width:"100%",
    position:"absolute",
    bottom:-130
  },
  nameCard:{height:"100%",
  width:"100%",
  alignItems:"center",
  justifyContent:"center",
  borderRadius:5,
  backgroundColor:"#fff", 
  shadowColor: '#000',
  shadowOffset: { width: 1, height: 1 },
  shadowOpacity:  0.4,
  shadowRadius: 3,
  elevation: 5},
  viewCrtBtn:{
    bottom:0,
    width:"100%",
    height:45,
    backgroundColor:"#041c5e",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center"
  }
})