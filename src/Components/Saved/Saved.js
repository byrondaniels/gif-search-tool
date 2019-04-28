import React, { Component } from "react";
import GifList from "../GifList/GifList";
import { connect } from "react-redux";
import { deleteGif, deleteAllGif, saveGif } from "../../actions";
import "./Saved.css";

const mapStateToProps = state => {
  return {
    savedGifs: state.savedGifList.savedGifs
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSaveGifs: newSavedGifs => dispatch(saveGif(newSavedGifs)),
    onDeleteGif: toRemove => dispatch(deleteGif(toRemove)),
    onDeleteAllGif: () => dispatch(deleteAllGif())
  };
};

class Saved extends Component {
  deleteSavedItem = toRemove => {
    this.props.onDeleteGif(toRemove);
  };
  clearSaved = () => {
    this.props.onDeleteAllGif();
  };
  render() {
    const { savedGifs } = this.props;
    return (
      <div className="save blue">
        <div className="clear-save-bar">
          <div onClick={this.clearSaved} className="clear-btn btn">
            Clear All Saved
          </div>
          <div className="saved-num-bar">
            Saved: <div id="num-saved">{savedGifs && savedGifs.length}</div>
          </div>
        </div>
        <div className="saved-padding-bar" />
        <div className="gif-container">
          {savedGifs ? (
            <GifList
              gifs={savedGifs}
              gifItemClick={this.deleteSavedItem}
              actionText={"Delete"}
            />
          ) : (
            <div className="loading">No Saved Gifs</div>
          )}
        </div>
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Saved);
