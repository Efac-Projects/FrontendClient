import {COUNT_ERROR, GET_COUNT} from "../actions/types"

const initalState={
   count:[],
    loading:true,
    error:{}
    
}

export default function (state=initalState,action){
    const{type,payload}=action

    switch(type){
       case GET_COUNT:
        return{
            ...state,
         count:payload,
            loading:false
           };
       
        case COUNT_ERROR:
            return{
                ...state,
                error:payload,
                loading:false
            
            };
       

        default:
            return state;
    }}