import { connect } from 'react-redux';
import {legacy_createStore as createStore  } from 'redux';


const addItem = "addItem";
const removeItem ="removeItem";


export const addFoodItem = (data) => {
    return {
      type: addItem,
      payload:data
    };
  };

  export const removeFoodItem = (data) => {
    return {
      type: removeItem,
      payload:data
    };
  };



  const initialStae = {menuItems:[{id:"1",name:"Guac de la Costa",ingridnts:"torillas de mais,fruit de la passio, mango",price:7,addedCount:0},
  {id:"2",name:"Chiharron y la Cerveza",ingridnts:"citron vert/Corona sauce",price:7,addedCount:0},
  {id:"3",name:"Chiharron y la Cerveza",ingridnts:"citron vert/Corona sauce",price:7,addedCount:0},
  {id:"4",name:"Chiharron y la Cerveza",ingridnts:"citron vert/Corona sauce",price:7,addedCount:0},
  {id:"5",name:"Chiharron y la Cerveza",ingridnts:"citron vert/Corona sauce",price:7,addedCount:0},
  {id:"6",name:"Chiharron y la Cerveza",ingridnts:"citron vert/Corona sauce",price:7,addedCount:0},
  {id:"7",name:"Chiharron y la Cerveza",ingridnts:"citron vert/Corona sauce",price:7,addedCount:0},
  {id:"8",name:"Chiharron y la Cveza",ingridnts:"citron vert/Corona sauce",price:7,addedCount:0}]};

   const addMenuItemReducer = (state = initialStae, actions) => {    

     switch (actions.type) {
      case 'addItem':
        let addedList = {...state};
        let toDoIndex=0;
        addedList.menuItems.forEach((ele,indx) => {
           if(ele.id ==actions.payload.id){
               toDoIndex = indx;
               return;
           }
        });
       addedList.menuItems[toDoIndex].addedCount+=1
         return{
          addedList,
            ...state,
         }
         case 'removeItem':
          let removedList = {...state};
        let toRemoveIndex=0;
        removedList.menuItems.forEach((ele,indx) => {
           if(ele.id ==actions.payload.id){
            toRemoveIndex = indx;
               return;
           }
        });
         removedList.menuItems[toRemoveIndex].addedCount>0? removedList.menuItems[toRemoveIndex].addedCount -=1:""
            return{
                 removedList,
                ...state
            } 
            default:
                return{
                    ...state
                }
    }
  };
   export let store = createStore(addMenuItemReducer);