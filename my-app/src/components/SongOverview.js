import React, { useEffect, useState } from "react";
import SongForm from "./SongForm";
import SongListItem from "./SongListItem";

function SongOverview() {
   const apiUrl = "https://winc-lil-playlist.firebaseio.com/songinfo.json";

   const [songs, setSongs] = useState("");
   const [sorting, setSorting] = useState("");
   // const [hipHopFilter, setHipHopFilter] = useState("");

   const getData = async () => {
      try {
         let response = await fetch(apiUrl, {
            method: "GET",
         });
         const result = await response.json();

         let song = Object.keys(result).map((key) => ({
            id: key,
            artist: result[key].artist,
            genre: result[key].genre,
            rating: result[key].rating,
            songtitle: result[key].songtitle,
         }));

         setSongs(song);
      } catch (error) {
         console.log(error);
      }
   };

   useEffect((event) => {
      getData(event);
   }, []);

   // [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
   // Delete song functionality
   // [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

   const removeSongFromApi = async (hashId) => {
      try {
         const apiUrl = `https://winc-lil-playlist.firebaseio.com/songinfo/${hashId}.json`;
         let response = await fetch(apiUrl, { method: "DELETE" });
         const result = await response.json();
         return result;
      } catch (error) {
         console.log(error);
      }
   };

   const deleteSongListItem = (id) => {
      setSongs(songs.filter((song) => song.id !== id));
      removeSongFromApi(id);
   };

   // [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
   // Sorting Functionality
   // [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

   const onChangeSort = (event) => {
      console.log("Geselecteerde sortering", event.target.value);
      setSorting(event.target.value);
   };

   // To do: zorgen dat input altijd een hoofdletter krijgt zodat het sorteren goed gaat

   if (sorting === "songtitle A-Z") {
      songs.sort((a, b) => (a.songtitle > b.songtitle ? 1 : -1));
   } else if (sorting === "songtitle Z-A") {
      songs.sort((a, b) => (a.songtitle < b.songtitle ? 1 : -1));
   } else if (sorting === "artist A-Z") {
      songs.sort((a, b) => (a.artist > b.artist ? 1 : -1));
   } else if (sorting === "artist Z-A") {
      songs.sort((a, b) => (a.artist < b.artist ? 1 : -1));
   } else if (sorting === "1star-5star") {
      songs.sort((a, b) => (a.rating > b.rating ? 1 : -1));
   } else if (sorting === "5star-1star") {
      songs.sort((a, b) => (a.rating < b.rating ? 1 : -1));
   }

   // [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
   // Filter Functionality
   // [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

   /*    function filterHipHop() {
      hipHopFilter.filter((song) => {
         return song.genre === "Hip Hop";
      });
   }

   const onFilterGenreHipHop = (event) => {
      console.log("Geklikt op:", event.target.value);
      setHipHopFilter(event.target.value);
      filterHipHop();
   };
 */

   return (
      <div>
         <h1>Winc Lil' Playlist</h1>
         <SongForm />
         {/*          <button className="filter-button-hiphop" value="filter-button-hiphop" onClick={onFilterGenreHipHop}>
            Hip Hop
         </button> */}
         <div className="table-wrapper">
            <h2>Overview Favorite Songs</h2>

            <table>
               <thead className="song-header">
                  <tr>
                     <th className="song-row-item">
                        Song
                        {/* To Do: sort button in een aparte component zetten */}
                        <button className="sort-button" onClick={onChangeSort} value="songtitle A-Z">
                           A-Z
                        </button>
                        <button className="sort-button" onClick={onChangeSort} value="songtitle Z-A">
                           Z-A
                        </button>
                     </th>
                     <th className="song-row-item">
                        Artist
                        <button className="sort-button" onClick={onChangeSort} value="artist A-Z">
                           A-Z
                        </button>
                        <button className="sort-button" onClick={onChangeSort} value="artist Z-A">
                           Z-A
                        </button>
                     </th>
                     <th className="song-row-item">Genre</th>
                     <th className="song-row-item">
                        Rating
                        <button className="sort-button" onClick={onChangeSort} value="5star-1star">
                           5-1
                        </button>
                        <button className="sort-button" onClick={onChangeSort} value="1star-5star">
                           1-5
                        </button>
                     </th>
                     <th className="song-row-item">Delete</th>
                  </tr>
               </thead>
            </table>
            {/* Songlistitems worden hieronder geplaatst via de map method */}
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
      </div>
   );
}

export default SongOverview;
