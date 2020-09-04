const { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR, USER_REQUEST } = require("./usertypes")

const initialstate={
    loading:false,
    users:[],
    errors:'',
    data:[]
}

const reducer=(state =initialstate,action)=>{
    switch(action.type){
        case FETCH_USERS_REQUEST:return{
            ...state,
            loading:true
        }
        case FETCH_USERS_SUCCESS:return{
            users:action.payload,
            loading:false,
            errors:''
        }
        case FETCH_USERS_ERROR:return{
            users:[],
            loading:false,
            errors:action.payload
        }
        case USER_REQUEST:return{
            data:action.payload,
            loading:false,
            errors:''
        }
        default:return state
    }
}
export default reducer