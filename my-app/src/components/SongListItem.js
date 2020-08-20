import React from "react";

function SongListItem(props) {
   const convertRatingToStars = (rating) => {
      let starRating = "";

      if (rating === "1 star") {
         starRating = "⭐️";
      }
      if (rating === "2 stars") {
         starRating = "⭐️⭐️";
      }
      if (rating === "3 stars") {
         starRating = "⭐️⭐️⭐️";
      }
      if (rating === "4 stars") {
         starRating = "⭐️⭐️⭐️⭐️";
      }
      if (rating === "5 stars") {
         starRating = "⭐️⭐️⭐️⭐️⭐️";
      }
      return starRating;
   };

   return (
      <tr className="song-header" key={props.id}>
         <td className="song-row-item">{props.songtitle}</td>
         <td className="song-row-item">{props.artist}</td>
         <td className="song-row-item">{props.genre}</td>
         <td className="song-row-item">{convertRatingToStars(props.rating)}</td>
         <td key={props.id} className="song-cell-delete">
            <button id={props.id} className="delete-button" onClick={props.handleRemoveItem}>
               Delete
            </button>
         </td>
      </tr>
   );
}

export default SongListItem;
