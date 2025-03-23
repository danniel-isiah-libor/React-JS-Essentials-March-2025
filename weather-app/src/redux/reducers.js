import { ADD } from "@/redux/actions";

const reducer = (state = {}, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        ...action.item,
      };
    default:
      return state;
  }
};

export default reducer;