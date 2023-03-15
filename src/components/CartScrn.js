import React,{useState,useEffect} from 'react';
import { Button ,View,Text,Platform,StatusBar,TextInput,Dimensions, ImageBackground,Image,StyleSheet,BackHandler} from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { TouchableRipple } from 'react-native-paper';
import  AntDesign  from 'react-native-vector-icons/AntDesign';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import  Feather  from 'react-native-vector-icons/Feather';
import { useSelector,useDispatch } from 'react-redux';
import { addFoodItem, removeFoodItem } from '../Store/Store';


const height = Dimensions.dev
const width = Dimensions.width
const CartScrn = (props) =>{

const state = useSelector((state) => state);
const dispatch = useDispatch();
const[cartItems,setCartItems] = useState([]);
const[allAddedItems,setAllAddedItems] = useState([]);
const[totalPrice,setTotalPrice] = useState(0);
const [isListExpanded,setIsListExpanded] = useState(false)

const addItem = (id)=>{
  dispatch(addFoodItem({id}));
}

const removeItem = (id) =>{
 dispatch(removeFoodItem({id}))
}

const showMore = () =>{
  const cartItems = state.menuItems.filter((ele,indx) => ele.addedCount>0);
    let moreItems = [...cartItems];
    console.log(moreItems)
    setCartItems(moreItems)
    setIsListExpanded(true)
  
}

const showLess = () =>{
  const cartItems = state.menuItems.filter((ele,indx) => ele.addedCount>0);
  if(cartItems.length > 2){
    let lesItems = [...cartItems];
      setCartItems(lesItems.slice(0,2))
      setIsListExpanded(false)
  }
}

useEffect(() =>{
 const cartItems = state.menuItems.filter((ele,indx) => ele.addedCount>0);
 const total = cartItems.reduce((acc,curr) =>{return acc=acc+(curr.price*curr.addedCount)},0)
 setAllAddedItems(cartItems)
if(!isListExpanded){
  if(cartItems.length > 2){
    let lesItems = [...cartItems];
      setCartItems(lesItems.slice(0,2))
  }else{
    let moreItems = [...cartItems];
    setCartItems(moreItems)
  }
}
 setTotalPrice(total)
 if(cartItems.length == 0){
   props.navigation.goBack()
 }
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
             <View style={{flex:2}}>
                <View  style={{flex:1,backgroundColor:"#041c5e"}}>
                 <View style={{flexDirection:"row",alignItems:"center",paddingLeft:15,paddingTop:25}}> 
                     <AntDesign name="arrowleft" size={24} color="#fff" onPress={()=>{props.navigation.goBack()}}/>
                     <Text style={{fontSize:24,color:"#fff",paddingLeft:25}}>My Cart</Text>
                 </View>
                 <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                     <View style={{width:"55%",backgroundColor:"#fff",borderRadius:4,alignItems:"center",justifyContent:"center",paddingVertical:20}}>
                      <Text style={{color:"#ff9800",fontSize:18,paddingBottom:10}}>Total cost</Text>
                      <Text style={{fontSize:22}}>$ {totalPrice}</Text>
                     </View>
                 </View>
                </View>
             </View>
             <View style={{flex:4}}>
                <View style={{paddingTop:20,paddingHorizontal:20}}>
                   <Text style={{fontSize:20,paddingBottom:20}}>Review Orders</Text>
                   <FlatList contentContainerStyle={{paddingBottom:100}} showsVerticalScrollIndicator={false} data={cartItems}renderItem={renderItem} keyExtractor={(eachItem,index)=> index.toString()} ListFooterComponent={() =>(    <View style={{alignItems:"flex-start",flexDirection:'row',justifyContent:"flex-end"}}>
                     {allAddedItems.length>2?<View >
                     {cartItems.length>2?<TouchableRipple onPress={() =>{showLess()}}>
                         <Text style={{fontSize:16,borderBottomColor:"black",borderBottomWidth:0.5}}>Show Less</Text>
                     </TouchableRipple>:<TouchableRipple onPress={() =>{showMore()}}>
                         <Text style={{fontSize:16,borderBottomColor:"black",borderBottomWidth:0.5}}>Show more</Text>
                     </TouchableRipple>}
                    </View>:<></>}
                   </View>)}></FlatList>
                </View>
             </View>
          </View>
          <TouchableRipple onPress={() =>{props.navigation.navigate("OrderScrn")}}>
          <View name="bottom-bar" style={[styles.viewCrtBtn]}>
                <Text style={{color:"#fff"}}>PLACE ORDER</Text>
          </View>
          </TouchableRipple>
        </View>
    )
}

export default CartScrn;

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