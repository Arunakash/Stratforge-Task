import React from 'react';
import {View,Text,StatusBar,StyleSheet,Image, Linking} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from './Header';
import moment from 'moment';

const DetailsScrn = (props) =>{
  return(
    <View style={{flex:1,paddingTop:Platform.OS === "android"?StatusBar.currentHeight:"",backgroundColor:"#fff"}}>
    <View name="Header-holder">
    <View style={{overflow:'hidden',paddingBottom:5}}>
           <View name="header-container" style={styles.headerContainerStyle}>
            <View name="header-content" style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View name="row1" style={{flexDirection:'row',alignItems:'center',paddingVertical:8}}>
                 <MaterialCommunityIcons name="arrow-left" size={25} color="black" onPress={() =>{props.navigation.goBack()}}/>
                 <Text style={{paddingLeft:17,fontWeight:'bold',fontSize:17}}>{props.route.params.selectedCatgry} details</Text>
                 {/* <Text>{props.route.params.item.name}</Text> */}
                </View>
            </View>
           </View>
        </View>
    </View>
    <View style={{flex:1}} name="body-hldr">
       <ScrollView contentContainerStyle={{flexGrow:1}} style={{flex:1}}>
          {props.route.params.selectedCatgry ==="Rockets"?<View style={{flex:1}}>
             <View name="content-scrn" style={{paddingTop:30,paddingHorizontal:20}}>
                <View name={"name-hldr"} style={{flex:1,flexDirection:'row'}}>
                <Text style={{fontSize:22,fontWeight:'bold'}}>{props.route.params.item.name}</Text>
                </View>
                <Text style={{color:"grey",paddingTop:12,fontSize:17}} >{props.route.params.item.company}</Text>
                <Text style={{paddingTop:8,fontSize:15}}>{props.route.params.item.country}</Text>
                <View name={"details-part"} style={{paddingTop:30,paddingBottom:40,borderBottomColor:"#cccccc",borderBottomWidth:0.5}}>
                   <Text style={{fontSize:22,fontWeight:'bold'}}>Rocket details</Text>
                   <Text style={{color:"black",paddingTop:5}}>Rocket ID - <Text style={{color:"grey"}}>{props.route.params.item.id}</Text></Text>
                   <Text style={{color:"black",paddingTop:3}}>Working status - {props.route.params.item.active?"Active":"InActive"}</Text>
                 
                   <View name="size-details" >
                    <Text style={{paddingTop:30,paddingBottom:15,fontSize:18,fontWeight:'bold'}}>Size</Text>
                  <View>
                    <View style={{paddingBottom:12,flexDirection:'row',alignItems:'center',flex:1}}>
                     <Text style={{paddingLeft:20,fontSize:16,fontWeight:"bold"}}>Diameter</Text>
                    </View>
                    <View name="content-hldr" style={{flexDirection:'row',paddingLeft:20}}>
                      <View style={{borderRadius:4,backgroundColor:"#E8E8E8",paddingVertical:6,paddingHorizontal:8}}>
                       <Text>{props.route.params.item.diameter.feet} in feets - {props.route.params.item.diameter.meters} in meters</Text>
                      </View>
                     </View>
                   </View>

                   <View style={{paddingTop:20}}>
                    <View style={{paddingBottom:12,flexDirection:'row',alignItems:'center',flex:1}}>
                     <Text style={{paddingLeft:20,fontSize:16,fontWeight:"bold"}}>Height</Text>
                    </View>
                    <View name="content-hldr" style={{flexDirection:'row',paddingLeft:20}}>
                      <View style={{borderRadius:4,backgroundColor:"#E8E8E8",paddingVertical:6,paddingHorizontal:8}}>
                       <Text>{props.route.params.item.height.feet} in feets - {props.route.params.item.height.meters} in meters</Text>
                      </View>
                     </View>
                   </View>

                   <View style={{paddingTop:20}}>
                    <View style={{paddingBottom:12,flexDirection:'row',alignItems:'center',flex:1}}>
                     <Text style={{paddingLeft:20,fontSize:16,fontWeight:"bold"}}>Mass</Text>
                    </View>
                    <View name="content-hldr" style={{flexDirection:'row',paddingLeft:20}}>
                      <View style={{borderRadius:4,backgroundColor:"#E8E8E8",paddingVertical:6,paddingHorizontal:8}}>
                       <Text>{props.route.params.item.mass.kg} in kgs - {props.route.params.item.mass.kg} in lb</Text>
                      </View>
                     </View>
                   </View>

                   </View>

                   <View name="enginee-details" >
                    <Text style={{paddingTop:30,paddingBottom:15,fontSize:18,fontWeight:'bold'}}>Enginees</Text>
                 
                   <View>
                      <View style={{paddingBottom:12,flexDirection:'row',alignItems:'center',flex:1}}>
                        <Text style={{paddingLeft:20,fontSize:16,fontWeight:"bold",color:"grey"}}>Enginee loss at max</Text>
                     </View>
                    <View name="content-hldr" style={{flexDirection:'row',paddingLeft:20}}>
                      <View style={{borderRadius:4,backgroundColor:"#E8E8E8",paddingVertical:6,paddingHorizontal:8}}>
                       <Text>{props.route.params.item.engines.engine_loss_max}</Text>
                      </View>
                     </View>
                   </View>

                   <View style={{paddingTop:20}}>
                      <View style={{paddingBottom:12,flexDirection:'row',alignItems:'center',flex:1}}>
                        <Text style={{paddingLeft:20,fontSize:16,fontWeight:"bold",color:"grey"}}>ISP</Text>
                     </View>
                    <View name="content-hldr" style={{flexDirection:'row',paddingLeft:20}}>
                      <View style={{borderRadius:4,backgroundColor:"#E8E8E8",paddingVertical:6,paddingHorizontal:8}}>
                       <Text>Sea level - {props.route.params.item.engines.isp.sea_level} , Vacum - {props.route.params.item.engines.isp.vacuum}</Text>
                      </View>
                     </View>
                   </View>

                   <View style={{paddingTop:20}}>
                      <View style={{paddingBottom:12,flexDirection:'row',alignItems:'center',flex:1}}>
                        <Text style={{paddingLeft:20,fontSize:16,fontWeight:"bold",color:"grey"}}>Layout</Text>
                     </View>
                    <View name="content-hldr" style={{flexDirection:'row',paddingLeft:20}}>
                      <View style={{borderRadius:4,backgroundColor:"#E8E8E8",paddingVertical:6,paddingHorizontal:8}}>
                       <Text>{props.route.params.item.engines.layout}</Text>
                      </View>
                     </View>
                   </View>

                   <View style={{paddingTop:20}}>
                      <View style={{paddingBottom:12,flexDirection:'row',alignItems:'center',flex:1}}>
                        <Text style={{paddingLeft:20,fontSize:16,fontWeight:"bold",color:"grey"}}>Propellant 1</Text>
                     </View>
                    <View name="content-hldr" style={{flexDirection:'row',paddingLeft:20}}>
                      <View style={{borderRadius:4,backgroundColor:"#E8E8E8",paddingVertical:6,paddingHorizontal:8}}>
                       <Text>{props.route.params.item.engines.propellant_2}</Text>
                      </View>
                     </View>
                   </View>

                   <View style={{paddingTop:20}}>
                      <View style={{paddingBottom:12,flexDirection:'row',alignItems:'center',flex:1}}>
                        <Text style={{paddingLeft:20,fontSize:16,fontWeight:"bold",color:"grey"}}>Propellant 2</Text>
                     </View>
                    <View name="content-hldr" style={{flexDirection:'row',paddingLeft:20}}>
                      <View style={{borderRadius:4,backgroundColor:"#E8E8E8",paddingVertical:6,paddingHorizontal:8}}>
                       <Text>{props.route.params.item.engines.propellant_2}</Text>
                      </View>
                     </View>
                   </View>

                   <View style={{paddingTop:20}}>
                      <View style={{paddingBottom:12,flexDirection:'row',alignItems:'center',flex:1}}>
                        <Text style={{paddingLeft:20,fontSize:16,fontWeight:"bold",color:"grey"}}>Thurst Sea Level</Text>
                     </View>
                    <View name="content-hldr" style={{flexDirection:'row',paddingLeft:20}}>
                      <View style={{borderRadius:4,backgroundColor:"#E8E8E8",paddingVertical:6,paddingHorizontal:8}}>
                       <Text>KN - {props.route.params.item.engines.thrust_sea_level["KN"]}, LBF - {props.route.params.item.engines.thrust_sea_level.lbf}</Text>
                      </View>
                     </View>
                   </View>

                   <View style={{paddingTop:20}}>
                      <View style={{paddingBottom:12,flexDirection:'row',alignItems:'center',flex:1}}>
                        <Text style={{paddingLeft:20,fontSize:16,fontWeight:"bold",color:"grey"}}>Enginee Type</Text>
                     </View>
                    <View name="content-hldr" style={{flexDirection:'row',paddingLeft:20}}>
                      <View style={{borderRadius:4,backgroundColor:"#E8E8E8",paddingVertical:6,paddingHorizontal:8}}>
                       <Text>{props.route.params.item.engines.type}</Text>
                      </View>
                     </View>
                   </View>

                   <View style={{paddingTop:20}}>
                      <View style={{paddingBottom:12,flexDirection:'row',alignItems:'center',flex:1}}>
                        <Text style={{paddingLeft:20,fontSize:16,fontWeight:"bold",color:"grey"}}>Enginee version</Text>
                     </View>
                    <View name="content-hldr" style={{flexDirection:'row',paddingLeft:20}}>
                      <View style={{borderRadius:4,backgroundColor:"#E8E8E8",paddingVertical:6,paddingHorizontal:8}}>
                       <Text>{props.route.params.item.engines.version}</Text>
                      </View>
                     </View>
                   </View>

                   </View>

                    
                </View>
                <View name={"details-part"} style={{paddingTop:30,paddingBottom:40,borderBottomColor:"#cccccc",borderBottomWidth:0.5}}>
                   <Text style={{fontSize:22,fontWeight:'bold'}}>Description</Text>
                   <View>
                   <Text style={{paddingLeft:20,fontSize:14,paddingTop:20}}>{props.route.params.item.description}</Text>
                   </View>
                </View>

                <View name={"images-part"} style={{paddingTop:30,paddingBottom:40,borderBottomColor:"#cccccc",borderBottomWidth:0.5}}>
                   <Text style={{fontSize:22,fontWeight:'bold'}}>Images</Text>
                  {props.route.params.item.flickr_images.map((ele,indx) =>(
                              <View key={indx} style={{paddingTop:20}}>
                              <Image source={{uri:ele}} style={{height:200,width:"100%"}} resizeMode="contain"></Image>
                             </View>
                  ))
            
                  }
                </View>


             </View>
          </View>:<></>}
          {props.route.params.selectedCatgry ==="History"?<View>
          <View name="content-scrn" style={{paddingTop:30,paddingHorizontal:20}}>
                <View name={"name-hldr"} style={{flex:1,flexDirection:'row'}}>
                  <Text style={{fontSize:22,fontWeight:'bold'}}>{props.route.params.item.title}</Text>
                </View> 
                <Text style={{paddingTop:10,fontWeight:"bold"}}>Event happend on:  <Text style={{fontWeight:"100"}}>{moment(props.route.params.item.event_date_unix).format("ddd, MMM Do YYYY")}</Text></Text>
                <View name={"details-part"} style={{paddingTop:30,paddingBottom:40,borderBottomColor:"#cccccc",borderBottomWidth:0.5}}>
                   <Text style={{fontSize:22,fontWeight:'bold'}}>Details</Text>
                   <Text style={{paddingTop:10}}>{props.route.params.item.details}</Text>
                </View>
                <View name={"details-part"} style={{paddingTop:30,paddingBottom:40,borderBottomColor:"#cccccc",borderBottomWidth:0.5}}>
                   <Text style={{fontSize:22,fontWeight:'bold'}}>Article</Text>
                   <Text style={{paddingTop:10,color:"#1a73e8"}} onPress={()=>{Linking.openURL(props.route.params.item.links.article)}}>{props.route.params.item.links.article}</Text>
                </View>
            </View>
          </View>:<></>}
          {props.route.params.selectedCatgry ==="Launches"?<View>
          <View name="content-scrn" style={{paddingTop:30,paddingHorizontal:20}}>
                <View name={"name-hldr"} style={{flex:1,flexDirection:'row'}}>
                <Text style={{fontSize:22,fontWeight:'bold'}}>{props.route.params.item.name}</Text>
                </View>
              { props.route.params.item.date_unix?<Text style={{color:"grey"}}>{moment(props.route.params.item.date_unix).format("ddd, MMM Do YYYY")}</Text>:<></>}
                <View name={"details-part"} style={{paddingTop:30,paddingBottom:40,borderBottomColor:"#cccccc",borderBottomWidth:0.5}}>
                <Text style={{fontSize:22,fontWeight:'bold',paddingBottom:30}}>Details</Text>
           
                  <View style={{paddingBottom:30}}>
                    <View style={{paddingBottom:12,flexDirection:'row',alignItems:'center',flex:1}}>
                     <Text style={{paddingLeft:20,fontSize:16,fontWeight:"bold"}}>Flight Number</Text>
                    </View>
                    <View name="content-hldr" style={{flexDirection:'row',paddingLeft:20}}>
                      <View style={{borderRadius:4,backgroundColor:"#E8E8E8",paddingVertical:6,paddingHorizontal:8}}>
                       <Text>{props.route.params.item.flight_number}</Text>
                      </View>
                     </View>
                   </View>

                   <View style={{paddingBottom:30}}>
                    <View style={{paddingBottom:12,flexDirection:'row',alignItems:'center',flex:1}}>
                     <Text style={{paddingLeft:20,fontSize:16,fontWeight:"bold"}}>ID</Text>
                    </View>
                    <View name="content-hldr" style={{flexDirection:'row',paddingLeft:20}}>
                      <View style={{borderRadius:4,backgroundColor:"#E8E8E8",paddingVertical:6,paddingHorizontal:8}}>
                       <Text>{props.route.params.item.id}</Text>
                      </View>
                     </View>
                   </View>

                { props.route.params.item.launch_library_id?  <View style={{paddingBottom:30}}>
                    <View style={{paddingBottom:12,flexDirection:'row',alignItems:'center',flex:1}}>
                     <Text style={{paddingLeft:20,fontSize:16,fontWeight:"bold"}}>Launch Library ID</Text>
                    </View>
                    <View name="content-hldr" style={{flexDirection:'row',paddingLeft:20}}>
                      <View style={{borderRadius:4,backgroundColor:"#E8E8E8",paddingVertical:6,paddingHorizontal:8}}>
                       <Text>{props.route.params.item.launch_library_id}</Text>
                      </View>
                     </View>
                   </View>:<></>}

                   { props.route.params.item.launchpad?  <View style={{paddingBottom:30}}>
                    <View style={{paddingBottom:12,flexDirection:'row',alignItems:'center',flex:1}}>
                     <Text style={{paddingLeft:20,fontSize:16,fontWeight:"bold"}}>Launchpad</Text>
                    </View>
                    <View name="content-hldr" style={{flexDirection:'row',paddingLeft:20}}>
                      <View style={{borderRadius:4,backgroundColor:"#E8E8E8",paddingVertical:6,paddingHorizontal:8}}>
                       <Text>{props.route.params.item.launchpad}</Text>
                      </View>
                     </View>
                   </View>:<></>}

                   { props.route.params.item.links.webcast?  <View style={{paddingBottom:30}}>
                    <View style={{paddingBottom:12,flexDirection:'row',alignItems:'center',flex:1}}>
                     <Text style={{paddingLeft:20,fontSize:16,fontWeight:"bold"}}>Web Cast</Text>
                    </View>
                    <View name="content-hldr" style={{flexDirection:'row',paddingLeft:20}}>
                      <View style={{borderRadius:4,backgroundColor:"#E8E8E8",paddingVertical:6,paddingHorizontal:8}}>
                       <Text style={{color:"#1a73e8"}} onPress={() =>{Linking.openURL(props.route.params.item.links.webcast)}}>{props.route.params.item.links.webcast}</Text>
                      </View>
                     </View>
                   </View>:<></>}

                </View>
             </View>
          </View>:<></>}
       </ScrollView>
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


export default DetailsScrn;