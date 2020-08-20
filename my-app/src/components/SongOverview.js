import React, { useState } from "react";
import SongForm from "./SongForm";
import SongOverviewHeader from "./SongOverviewHeader";
import SongListItem from "./SongListItem";
import allSongsArray from "./songs.js";

function SongOverview() {
   const [songs, setSongs] = useState(allSongsArray);
   const [sorting, setSorting] = useState("");

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

   /*    const deleteSongFunctie = () => {
      songs.map((data) => {
         return data.id;
      });
   }; */

   const deleteSongListItem = (songObject) => {
      setSongs(songs.filter((remainingSongs) => remainingSongs.id !== songObject.id));
      // deleteSongFunctie(songObject.key);
   };

   const onChangeSort = (sortMethod) => {
      setSorting(sortMethod);
   };

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
                          deleteSongListItem={deleteSongListItem}
                       />
                    ))
                  : null}
            </tbody>
         </table>
      </div>
   );
}

export default SongOverview;
