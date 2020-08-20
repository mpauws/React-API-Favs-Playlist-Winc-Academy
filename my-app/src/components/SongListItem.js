import React from "react";

function SongListItem({ id, songtitle, artist, genre, rating, handleRemoveItem }) {
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
      <tr className="song-header" key={id}>
         <td className="table-body-song">{songtitle}</td>
         <td className="table-body-artist">{artist}</td>
         <td className="table-body-genre">{genre}</td>
         <td className="table-body-rating">{convertRatingToStars(rating)}</td>
         <td key={id} className="table-body-delete">
            <button id={id} className="delete-button" onClick={handleRemoveItem}>
               Delete
            </button>
         </td>
      </tr>
   );
}

export default SongListItem;
