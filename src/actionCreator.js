import {ADD_ALL_GIFS} from "./actionType";
import axios from "axios";

export const fetchAllGifs = () => (dispatch) => {
  axios
    .get(
      "http://api.giphy.com/v1/gifs/random?api_key=6Xd2EVn7qdDJs9dPRYj713uM9kkGYdzN"
    )
    .then((res) => {
        // debugger
        console.log(res.data.data.title);
        dispatch({type: ADD_ALL_GIFS, payload: res.data.data.title})
    })
    .catch((err) => {
      debugger;
    });
};
