import React from "react";
import "./App.css";
import { connect } from "react-redux";
import GifList from "./GifList";
import GifForm from "./GifForm";

function App(props) {
  // const gifs = data;
  // const loading = false;
  // const error = '';
  const {loading} = props;

  return (
    <div className="App">
      <h1>Search for Gifs</h1>
      <GifForm/>

      {loading ? <h3>We are loading</h3> : <GifList/>}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
  }
}

export default connect(mapStateToProps)(App);

//api key 6Xd2EVn7qdDJs9dPRYj713uM9kkGYdzN
//api.giphy.com/v1/gifs/search?api_key=6Xd2EVn7qdDJs9dPRYj713uM9kkGYdzN
