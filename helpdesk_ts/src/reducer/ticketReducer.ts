
export function ticketsReducer(state:any,{type,payload}:any){
    if(type=="set"){
      return {data:payload,isLoading:false,selectedLokalizacja:""} 
    }
    if(type=="add"){
      return {isLoading:false,data:[...state.data,payload]}
    }
    
    if(type=="delete"){
    console.log(state.data);
      return {...state,data:[...state.data].filter((item:any)=>item.id!==payload),isLoading:false}
    }
    if(type=="setLokalizacja"){

        return {...state,selectedLokalizacja:payload}
      }
    return state
  }