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
               <td key={props.id} className="song-row-item"><button>Delete</button></td>
               {/* Delete knop werkt helaas nog niet */}
            </tr>
         </tbody>
      </table>
   );
}



export default SongListItem;
