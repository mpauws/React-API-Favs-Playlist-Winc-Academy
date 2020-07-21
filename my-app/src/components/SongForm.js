import React, { useState } from "react";

function SongForm(props) {
   const apiUrl = "https://winc-lil-playlist.firebaseio.com/songinfo.json";

   const [songtitle, setSongTitle] = useState("");
   const [artist, setArtist] = useState("");
   const [genre, setGenre] = useState("");
   const [rating, setRating] = useState("");

   const postSongToApi = async () => {
      try {
         let response = await fetch(apiUrl, {
            method: "POST",
            body: JSON.stringify({
               artist: artist,
               genre: genre,
               rating: rating,
               songtitle: songtitle,
            }),
         });
         const result = await response.json();
         return result;
      } catch (error) {
         console.log(error);
      }
   };

   const handleSubmit = (event) => {
      postSongToApi(event);
   };

   const onChangeSongTitle = (event) => {
      setSongTitle(event.target.value);
   };
   const onChangeArtist = (event) => {
      setArtist(event.target.value);
   };
   const onChangeGenre = (event) => {
      setGenre(event.target.value);
   };

   const onChangeRating = (event) => {
      setRating(event.target.value);
   };

   return (
      <div className="song-form">
         <h2>Add your favorite songs:</h2>
         <form className="songform-wrapper" onSubmit={handleSubmit}>
            <label className="songform-label">
               <input
                  type="text"
                  placeholder="Song Title"
                  name="songtitle"
                  value={songtitle}
                  onChange={onChangeSongTitle}
               />
            </label>
            <br />
            <label className="songform-label">
               <input type="text" placeholder="Artist" name="artist" value={artist} onChange={onChangeArtist} />
            </label>
            <br />
            <select className="songform-label" name="genre" value={genre} onChange={onChangeGenre}>
               <option value="">-- Please select a genre</option>
               <option value="Pop Music">Pop Music</option>
               <option value="Hip Hop">Hip Hop</option>
               <option value="Hard Rock">Hard Rock</option>
               <option value="Elevator Music">Elevator Music</option>
               <option value="Klantenservice Wachtrij Music">Klantenservice Wachtrij Music</option>
               <option value="Apres Ski">Apres Ski</option>
               <option value="Heavy Metal">Heavy Metal</option>
               <option value="Classical">Classical</option>
               <option value="Bossa Nova">Bossa Nova</option>
            </select>
            <br />
            <select className="songform-label" name="rating" value={rating} onChange={onChangeRating}>
               <option value="">-- Please rate your song</option>
               <option value="1 star">1 star</option>
               <option value="2 stars">2 stars</option>
               <option value="3 stars">3 stars</option>
               <option value="4 stars">4 stars</option>
               <option value="5 stars">5 stars</option>
            </select>
            <br />
            <button className="add-button" type="submit">
               Add This Song
            </button>
         </form>
      </div>
   );
}
export default SongForm;
