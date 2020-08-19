import React from "react";

function SongListItem(props) {
   return (
      <tr className="song-header" key={props.id}>
         <td className="song-row-item">{props.songtitle}</td>
         <td className="song-row-item">{props.artist}</td>
         <td className="song-row-item">{props.genre}</td>
         <td className="song-row-item">{props.rating}</td>
         <td key={props.id} className="song-cell-delete">
            <button key={props.id} className="delete-buttons" onClick={(event) => props.deleteSongListItem(props.id)}>
               Delete
            </button>
         </td>
         {/* Delete knop werkt helaas nog niet */}
      </tr>
   );
}

export default SongListItem;
