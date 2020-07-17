import React, { useState } from "react";
import SongForm from "./SongForm";
import SongList from "./SongList";

function SongOverview() {
   const allSongsArray = [
      {
         id: "1",
         songtitle: "Snelle Planga",
         artist: "Rapper Donnie",
         genre: "Hip Hop",
         rating: "5 stars",
      },
      {
         id: "2",
         songtitle: "Anton aus Tirol",
         artist: "Anton feat. DJ Ötzi",
         genre: "Apres Ski",
         rating: "3 stars",
      },
      // Default voorbeeld voor in de lijst
   ];

   const [songs, setSongs] = useState(allSongsArray);

   const addSongToList = (item) => {
      item.id = songs.length + 1; // zodat id steeds een uniek nummer krijgt
      setSongs([...songs, item]); // merge arrays
   };

   return (
      // To Do: Structuur van tabel fixen
      <div>
         <h1>Winc Lil' Playlist</h1>
         <SongForm addSongToList={addSongToList} />

         <h2>Overview Favorite Songs</h2>
         <table>
            <theader className="song-header">
               <th className="song-row-item">Song</th>
               <th className="song-row-item">Artist</th>
               <th className="song-row-item">Genre</th>
               <th className="song-row-item">Rating</th>
               <th className="song-row-item">Delete</th>
            </theader>
         </table>
         <SongList songs={songs} />
      </div>
   );
}

export default SongOverview;
