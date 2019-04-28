import React from "react";
import "./GifList.css";
import GifCard from "./GifCard";
const GifList = ({ gifs, gifItemClick, actionText }) => {
  return (
    <div className="gif-list">
      {gifs.map((index, i) => {
        return (
          <GifCard
            key={i}
            title={gifs[i].title}
            // embed={gifs[i].images.fixed_width.url}
            embed={gifs[i].images.fixed_width_still.url}
            data={gifs[i]}
            gifItemClick={gifItemClick}
            actionText={actionText}
          />
        );
      })}
    </div>
  );
};
export default GifList;
