import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import GifList from "./GifList";
import GifForm from "./GifForm";
import * as actionCreators from "./actionCreator";
import addGifReducer from "./reducer";

function App(props) {
  // const gifs = data;
  // const loading = false;
  // const error = '';
  const { fetchAllGifs, addGifReducer } = props;

  useEffect(() => {
    fetchAllGifs();
  }, []);
  // console.log(reducer)
  return (
    <div className="App">
      <h1>Search for Gifs</h1>
      <h4>{addGifReducer}</h4>
      {/* <GifForm />
      <GifList /> */}
      {/* {loading ? <h3>We are loading</h3> : } */}
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state.title)
  return {
    addGifReducer: state.title,
    // title: state.title,
  };
};

export default connect(mapStateToProps, actionCreators)(App);

//api key 6Xd2EVn7qdDJs9dPRYj713uM9kkGYdzN
// api.giphy.com/v1/gifs/search?api_key=6Xd2EVn7qdDJs9dPRYj713uM9kkGYdzN

// https://dad-jokes.p.rapidapi.com/random/joke
// 6fdd97e603msh2c44851d4b12a8cp1c4dc5jsn2f731dcea16a
