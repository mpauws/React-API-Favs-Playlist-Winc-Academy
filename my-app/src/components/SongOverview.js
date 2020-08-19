import React, { useState } from "react";
import SongForm from "./SongForm";
import SongSortSelect from "./SongSortSelect";
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
         songtitle: "This Is How We Do It",
         artist: "Montell Jordan",
         genre: "Hip Hop",
         rating: "3 stars",
      },
      {
         id: "5",
         songtitle: "Jij Krijgt Die Lach Niet Van Mijn Gezicht",
         artist: "John de Bever",
         genre: "Apres Ski",
         rating: "4 stars",
      },
      {
         id: "6",
         songtitle: "Shenkie",
         artist: "De Jeugd Van Tegenwoordig",
         genre: "Hip Hop",
         rating: "2 stars",
      },
      {
         id: "7",
         songtitle: "Spanish Castle Magic",
         artist: "Jimi Hendrix",
         genre: "Hard Rock",
         rating: "5 stars",
      },
      {
         id: "8",
         songtitle: "Overkill",
         artist: "Motörhead",
         genre: "Heavy Metal",
         rating: "5 stars",
      },
   ];

   const [songs, setSongs] = useState(allSongsArray);
   const [sorting, setSorting] = useState("");

   const addSongToList = (item) => {
      item.id = songs.length + 1;
      if (item.songtitle === "") {
         item.songtitle = "Unknown Songtitle";
         setSongs([...songs, item]);
      } else if (item.artist === "") {
         item.artist = "Unknown Artist";
         setSongs([...songs, item]);
      } else {
         setSongs([...songs, item]);
      }
   };

   const deleteSongFunctie = () => {
      songs.map((data) => {
         return data.id;
      });
   };

   const deleteSongListItem = (song) => {
      // console.log(event.target);
      setSongs(songs.filter((remainingSongs) => remainingSongs !== song));
      deleteSongFunctie(song.key);
   };

   const onChangeSort = (event) => {
      console.log("User changed the value", event.target.value);
      setSorting(event.target.value);
   };

   const onChangeSort2 = (sortMethod) => {
      setSorting(sortMethod);
   };

   if (sorting === "songtitle-Z-A") {
      songs.sort((a, b) => (a.songtitle < b.songtitle ? 1 : -1));
   }
   if (sorting === "songtitle-A-Z") {
      songs.sort((a, b) => (a.songtitle > b.songtitle ? 1 : -1));
   }
   if (sorting === "A-Z") {
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
         <SongForm addSongToList={addSongToList} />

         <h2>Overview Favorite Songs</h2>
         <SongSortSelect onChangeSort={onChangeSort} />
         <table>
            <thead className="song-header">
               <tr>
                  <th className="song-header-cell">
                     Song
                     <div className="sort-song" onClick={() => onChangeSort2("songtitle-Z-A")}>
                        Z-A
                     </div>
                     <div className="sort-song" onClick={() => onChangeSort2("songtitle-A-Z")}>
                        A-Z
                     </div>
                  </th>
                  <th className="song-header-cell">Artist</th>
                  <th className="song-header-cell">Genre</th>
                  <th className="song-header-cell">Rating</th>
                  <th className="song-cell-delete">Delete</th>
               </tr>
            </thead>
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
