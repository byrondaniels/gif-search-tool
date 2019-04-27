import React, { Component } from "react";
import SearchBar from "./SearchBar";
import GifList from "../GifList/GifList.js";
import { connect } from "react-redux";
import { setSearchField, requestGifs, saveGifs } from "../../actions";
import "./Search.css";

const mapStateToProps = state => {
  return {
    searchField: state.searchGifs.searchField,
    gifs: state.requestGifs.gifs,
    savedGifs: state.saveGifs.savedGifs,
    isPending: state.requestGifs.isPending
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestGifs: searchVar => dispatch(requestGifs(searchVar)),
    onSaveGifs: newSavedGifs => dispatch(saveGifs(newSavedGifs))
  };
};

class Search extends Component {
  componentDidMount = () => {
    this.props.onRequestGifs("pedro");
  };
  searchForGifs = () => {
    if (this.props.searchField) {
      this.props.onRequestGifs(this.props.searchField);
    }
  };
  addSavedGif = data => {
    let tempGifs = this.props.savedGifs;
    tempGifs.push(data);
    let unique = [...new Set(tempGifs)];
    this.props.onSaveGifs(unique);
  };

  render() {
    const { gifs, onSearchChange, isPending, savedGifs } = this.props;

    return (
      <div className="search">
        <div className="padding-bar" />
        <div className="search-bar">
          <div>
            Search For Gifs in Below Box:
            <SearchBar searchChange={onSearchChange} />
          </div>
          <div onClick={this.searchForGifs} className="search-btn">
            Search
          </div>
          <div className="saved-num-bar">
            Saved: <div id="num-saved">{savedGifs && savedGifs.length}</div>
          </div>
        </div>
        <div className="gif-container">
          {isPending ? (
            <div className="loading">Loading Gifs</div>
          ) : (
            <GifList
              gifs={gifs}
              gifItemClick={this.addSavedGif}
              actionText={"Save"}
            />
          )}
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
