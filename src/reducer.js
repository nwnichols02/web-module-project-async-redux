// import { data } from "./gifs";
import { ADD_ALL_GIFS } from "./actionType";
const initialState = {
//   gifs: [],
  title: '',
//   url: '',
  // loading: false,
  // err: '',
};

const addGifReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ALL_GIFS:
      return { ...state, title: action.payload };
    default:
      return state;
  }
};

export default addGifReducer;
