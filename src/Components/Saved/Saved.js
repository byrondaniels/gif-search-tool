import React, { Component } from "react";
import GifList from "../GifList/GifList";
import { connect } from "react-redux";
import { saveGifs } from "../../actions";
import "./Saved.css";

const mapStateToProps = state => {
  return {
    savedGifs: state.saveGifs.savedGifs
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSaveGifs: newSavedGifs => dispatch(saveGifs(newSavedGifs))
  };
};

class Saved extends Component {
  deleteSavedItem = toRemove => {
    let filtered = this.props.savedGifs.filter(item => {
      return item !== toRemove;
    });
    this.props.onSaveGifs(filtered);
  };
  clearSaved = () => {
    this.props.onSaveGifs();
  };
  render() {
    const { savedGifs } = this.props;
    return (
      <div className="save">
        <div className="clear-save-bar">
          <div onClick={this.clearSaved} className="clear-btn">
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
