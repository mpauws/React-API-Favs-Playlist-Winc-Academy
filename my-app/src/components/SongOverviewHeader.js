import React from "react";

function SongOverviewHeader(props) {
  return (
    <thead className="song-header">
      <tr>
        <th className="song-header-cell">
          <span>Song</span>
          <img
            className="sort-icon"
            onClick={() => props.onChangeSort("songtitle-Z-A")}
            src={require("./images/icons8-sort-down-64.png")}
            alt={"icon-down"}
          />
          <img
            className="sort-icon"
            src={require("./images/icons8-sort-up-64.png")}
            alt={"icon-up"}
            onClick={() => props.onChangeSort("songtitle-A-Z")}
          />
        </th>
        <th className="song-header-cell">
          Artist
          <img
            className="sort-icon"
            src={require("./images/icons8-sort-down-64.png")}
            alt={"icon-down"}
            onClick={() => props.onChangeSort("artist-Z-A")}
          />
          <img
            className="sort-icon"
            src={require("./images/icons8-sort-up-64.png")}
            alt={"icon-up"}
            onClick={() => props.onChangeSort("artist-A-Z")}
          />
        </th>
        <th className="song-header-cell">
          Genre
          <img
            className="sort-icon"
            src={require("./images/icons8-sort-down-64.png")}
            alt={"icon-down"}
            onClick={() => props.onChangeSort("genre-Z-A")}
          />
          <img
            className="sort-icon"
            src={require("./images/icons8-sort-up-64.png")}
            alt={"icon-up"}
            onClick={() => props.onChangeSort("genre-A-Z")}
          />
        </th>
        <th className="song-header-cell">
          Rating
          <img
            className="sort-icon"
            src={require("./images/icons8-sort-down-64.png")}
            alt={"icon-down"}
            onClick={() => props.onChangeSort("1star-5star")}
          />
          <img
            className="sort-icon"
            src={require("./images/icons8-sort-up-64.png")}
            alt={"icon-up"}
            onClick={() => props.onChangeSort("5star-1star")}
          />
        </th>
        <th className="song-cell-delete">Delete</th>
      </tr>
    </thead>
  );
}

export default SongOverviewHeader;
