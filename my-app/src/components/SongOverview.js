import React, { useState } from "react";
import SongForm from "./SongForm";
import SongList from "./SongList";
import SongListItem from "./SongListItem";

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
         rating: "2 stars",
      },
      {
         id: "3",
         songtitle: "White Limo",
         artist: "Foo Fighters",
         genre: "Hard Rock",
         rating: "5 stars",
      },
      {
         id: "4",
         songtitle: "Jij Krijgt Die Lach Niet Van Mijn Gezicht",
         artist: "John de Bever",
         genre: "Apres Ski",
         rating: "4 stars",
      },

      // Default voorbeeld voor in de lijst
   ];

   const [songs, setSongs] = useState(allSongsArray);
   const [sorting, setSorting] = useState("");
   // console.log("Songs Display", songs);

   const addSongToList = (item) => {
      item.id = songs.length + 1; // zodat id steeds een uniek nummer krijgt
      setSongs([...songs, item]); // merge arrays
   };


   const deleteSongFunctie = () => {songs.map (data => {
      return data.id;
   })}
   

   const deleteSongListItem = (event) => {
      console.log("ik werk!");
      // setSongs(songs.filter((item) => item !== songListItemId));
      deleteSongFunctie();
   };

   const onChangeSort = (event) => {
      console.log("User changed the value", event.target.value);
      setSorting(event.target.value);
   };

   if (sorting === "A-Z") {
      // console.log("songs", songs);
      songs.sort((a, b) => (a.songtitle > b.songtitle ? 1 : -1));
   }
   if (sorting === "Z-A") {
      songs.sort((a, b) => (a.songtitle < b.songtitle ? 1 : -1));
   }
   if (sorting === "1star-5star") {
      songs.sort((a, b) => (a.rating > b.rating ? 1 : -1));
   }
   if (sorting === "5star-1star") {
      songs.sort((a, b) => (a.rating < b.rating ? 1 : -1));
   }

   return (
      <div>
         <h1>Winc Lil' Playlist</h1>
         <SongForm addSongToList={addSongToList} />
         {/* {console.log("This is allSongsArray", allSongsArray)} */}
         <h2>Overview Favorite Songs</h2>

         <label>Sort Options</label>
         <select onChange={onChangeSort}>
            <option value="sorting">select</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            <option value="1star-5star">Rating 1-5</option>
            <option value="5star-1star">Rating 5-1</option>
         </select>
         <table>
            <thead className="song-header">
               <tr>
                  <th className="song-row-item">ID</th>
                  <th className="song-row-item">Song</th>
                  <th className="song-row-item">Artist</th>
                  <th className="song-row-item">Genre</th>
                  <th className="song-row-item">Rating</th>
                  <th className="song-row-item">Delete</th>
               </tr>
            </thead>
         </table>
         {songs
            ? songs.map((song) => (
                 <SongListItem
                    key={song.id}
                    id={song.id}
                    songtitle={song.songtitle}
                    artist={song.artist}
                    genre={song.genre}
                    rating={song.rating}
                    deleteSongListItem={deleteSongListItem}
                 />
              ))
            : null}
      </div>
   );
}

export default SongOverview;
