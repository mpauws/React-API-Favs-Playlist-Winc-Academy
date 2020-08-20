import React, { useState } from "react";
import SongForm from "./SongForm";
import SongOverviewHeader from "./SongOverviewHeader";
import SongListItem from "./SongListItem";
import allSongsArray from "./songs.js";

function SongOverview() {
   const [songs, setSongs] = useState(allSongsArray);
   const [sorting, setSorting] = useState("");

   // Add Song
   const addSongToList = (item) => {
      item.id = songs.length + 1;
      if (item.songtitle === "") {
         item.songtitle = "Unknown Songtitle";
      }
      if (item.artist === "") {
         item.artist = "Unknown Artist";
      }
      setSongs([...songs, item]);
   };

   // Remove Song
   const handleRemoveItem = (e) => {
      const songItem = e.target.id;
      setSongs(songs.filter((item) => item.id !== songItem));
   };

   // Remove Songs
   const onChangeSort = (sortMethod) => {
      setSorting(sortMethod);
   };

   // Sort Songs
   if (sorting === "songtitle-Z-A") {
      songs.sort((a, b) => (a.songtitle < b.songtitle ? 1 : -1));
   }
   if (sorting === "songtitle-A-Z") {
      songs.sort((a, b) => (a.songtitle > b.songtitle ? 1 : -1));
   }
   if (sorting === "artist-A-Z") {
      songs.sort((a, b) => (a.artist > b.artist ? 1 : -1));
   }
   if (sorting === "artist-Z-A") {
      songs.sort((a, b) => (a.artist < b.artist ? 1 : -1));
   }
   if (sorting === "genre-A-Z") {
      songs.sort((a, b) => (a.genre > b.genre ? 1 : -1));
   }
   if (sorting === "genre-Z-A") {
      songs.sort((a, b) => (a.genre < b.genre ? 1 : -1));
   }
   if (sorting === "1star-5star") {
      songs.sort((a, b) => (a.rating > b.rating ? 1 : -1));
   }
   if (sorting === "5star-1star") {
      songs.sort((a, b) => (a.rating < b.rating ? 1 : -1));
   }

   return (
      <div>
         <SongForm addSongToList={addSongToList} />
         <h2>Overview Favorite Songs</h2>
         <table>
            <SongOverviewHeader onChangeSort={onChangeSort} />
            <tbody>
               {songs
                  ? songs.map((song) => (
                       <SongListItem
                          key={song.id}
                          id={song.id}
                          songtitle={song.songtitle}
                          artist={song.artist}
                          genre={song.genre}
                          rating={song.rating}
                          handleRemoveItem={handleRemoveItem}
                       />
                    ))
                  : null}
            </tbody>
         </table>
      </div>
   );
}

export default SongOverview;
