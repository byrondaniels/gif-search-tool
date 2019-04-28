import React from "react";
const GifCard = ({ title, embed, data, gifItemClick, actionText }) => (
  <div className="gif-card">
    <h2 className="gif-card-top">{title}</h2>
    <div className="gif-card-bottom">
      <img alt="not found" src={embed} />

      <h1 className="gif-card-save btn" onClick={() => gifItemClick(data)}>
        {actionText}
      </h1>
    </div>
  </div>
);
export default GifCard;
