import {add} from "@/redux/actions"

const reducer = (state, action) => {
    switch (action.type){
        case add: 
        return {...state, ...action.item}
        default:
            return state
    }
}
export default reducer;