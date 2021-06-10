import { GET_TREATMENTS, TREATMENT_ERROR, GET_TREATMENT} from "../actions/types"

const initalState={ 
    treatment:[],
    treatments:[],
    loading:true,
    error:{}
    
}

export default function foo(state=initalState,action){
    const{type,payload}=action

    switch(type){
        case GET_TREATMENT:
            return{
                ...state,
                treatment:payload,
                loading:false 
             };

        case GET_TREATMENTS:
            return{
               ...state,
               treatments:payload,
               loading:false 
            };
       
       
        case TREATMENT_ERROR:
            return{
                ...state,
                error:payload,
                loading:false
            
            };
       

        default:
            return state;
    }
}