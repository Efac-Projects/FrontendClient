import { GET_PROFILE,GET_PROFILES, PROFILE_ERROR ,CLEAR_PROFILE,UPDATE_PROFILE} from "../actions/types"

const initalState={
    profile:null,
    profiles:[],
    loading:true,
    error:{}
    
}

export default function foo(state=initalState,action){
    const{type,payload}=action

    switch(type){
       case GET_PROFILE:
        return{
            ...state,
            profile:payload,
            loading:false
           };

        case UPDATE_PROFILE:
           return{
            ...state,
            profile:payload,
            loading:false
           };
        case GET_PROFILES:
            return{
               ...state,
               profiles:payload,
               loading:false 
            };
        case CLEAR_PROFILE:

            return{
                ...state,
                profile:null,
              
                loading:false
            };
       
        case PROFILE_ERROR:
            return{
                ...state,
                error:payload,
                loading:false
            
            };
       

        default:
            return state;
    }
}