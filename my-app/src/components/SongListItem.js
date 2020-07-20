import React from "react";

function SongListItem(props) {
   return (
      <table>
         <tbody>
            <tr className="song-header" key={props.id}>
               <td className="song-row-item">{props.songtitle}</td>
               <td className="song-row-item">{props.artist}</td>
               <td className="song-row-item">{props.genre}</td>
               <td className="song-row-item">{props.rating}</td>
               <td key={props.id} className="song-row-item">
                  <button className="delete-buttons" onClick={(event) => props.deleteSongListItem(props.id)}>
                     Delete
                  </button>
               </td>
            </tr>
         </tbody>
      </table>
   );
}

export default SongListItem;
