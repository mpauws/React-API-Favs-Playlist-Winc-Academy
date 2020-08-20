import React from "react";
import icondown from "./images/icons8-sort-down-64.png";
import iconup from "./images/icons8-sort-up-64.png";

function SongOverviewHeader(props) {
   const tableHeaderAttributes = [
      { columnName: "Song", sortAscending: "songtitle-A-Z", sortDescending: "songtitle-Z-A" },
      { columnName: "Artist", sortAscending: "artist-A-Z", sortDescending: "artist-Z-A" },
      { columnName: "Genre", sortAscending: "genre-A-Z", sortDescending: "genre-Z-A" },
      { columnName: "Rating", sortAscending: "1star-5star", sortDescending: "5star-1star" },
   ];

   return (
      <thead className="song-header">
         <tr>
            {tableHeaderAttributes.map((object) => (
               <th className="song-header-cell">
                  <span>{object.columnName}</span>
                  <img
                     className="sort-icon"
                     onClick={() => props.onChangeSort(object.sortDescending)}
                     src={icondown}
                     alt={"icon-down"}
                  />
                  <img
                     className="sort-icon"
                     onClick={() => props.onChangeSort(object.sortAscending)}
                     src={iconup}
                     alt={"icon-up"}
                  />
               </th>
            ))}
            <th className="song-cell-delete">Delete</th>
         </tr>
      </thead>
   );
}

export default SongOverviewHeader;
