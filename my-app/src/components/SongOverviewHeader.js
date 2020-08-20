import React from "react";
import icondown from "./images/icons8-sort-down-64.png";
import iconup from "./images/icons8-sort-up-64.png";

function SongOverviewHeader({ onChangeSort }) {
   const tableHeaderAttributes = [
      {
         columnName: "Song",
         class: "table-header-song",
         sortAscending: "songtitle-A-Z",
         sortDescending: "songtitle-Z-A",
      },
      { columnName: "Artist", class: "table-header-artist", sortAscending: "artist-A-Z", sortDescending: "artist-Z-A" },
      { columnName: "Genre", class: "table-header-genre", sortAscending: "genre-A-Z", sortDescending: "genre-Z-A" },
      {
         columnName: "Rating",
         class: "table-header-rating",
         sortAscending: "1star-5star",
         sortDescending: "5star-1star",
      },
   ];

   return (
      <thead className="song-header">
         <tr>
            {tableHeaderAttributes.map((object) => (
               <th key={object.columnName} className={object.class}>
                  <span>{object.columnName}</span>
                  <img
                     className="sort-icon"
                     onClick={() => onChangeSort(object.sortDescending)}
                     src={icondown}
                     alt={"icon-down"}
                  />
                  <img
                     className="sort-icon"
                     onClick={() => onChangeSort(object.sortAscending)}
                     src={iconup}
                     alt={"icon-up"}
                  />
               </th>
            ))}
            <th className="table-header-delete">Delete</th>
         </tr>
      </thead>
   );
}

export default SongOverviewHeader;
