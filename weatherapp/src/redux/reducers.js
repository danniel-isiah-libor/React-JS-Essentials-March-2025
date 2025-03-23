import { ADD } from "./action";

const reducer = (state = {},action)=>{
    switch (action.type) {
        case ADD:
            
            return{
                ...state,
                ...action.item,
            }
        default:
            return state;
    }
}

export default reducer;