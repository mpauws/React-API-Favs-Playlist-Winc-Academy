import React, { useState } from "react";

function SongForm(props) {
   const formInputFields = {
      id: "",
      songtitle: "",
      artist: "",
      genre: "",
      rating: "",
   };
   const [song, setSong] = useState(formInputFields);

   // onChange: "when typed in, passes its current value to the handleChange function"
   function onHandleChange(event) {
      const value = event.target.value;
      setSong({
         ...song,
         [event.target.name]: value,
      });
   }

   function onHandleSubmit(event) {
      event.preventDefault();
      props.addSongToList(song); // deze moet erbij!
      setSong(formInputFields);
   }

   return (
      // Let op: onSubmit hoeft alleen bij form en niet bij de individuele formInputFields
      // To Do: Styling: breaks weghalen en netter maken met CSS
      <div>
         <h2>Add your favorite songs:</h2>
         <form className="songform-wrapper" onSubmit={onHandleSubmit}>
            <label className="songform-label">
               <input
                  type="text"
                  placeholder="Song Title"
                  name="songtitle"
                  value={song.songtitle}
                  onChange={onHandleChange}
               />
            </label>
            <br />
            <label className="songform-label">
               <input type="text" placeholder="Artist" name="artist" value={song.artist} onChange={onHandleChange} />
            </label>
            <br />
            <select className="songform-label" name="genre" value={song.genre} onChange={onHandleChange}>
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
            <select className="songform-label" name="rating" value={song.rating} onChange={onHandleChange}>
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
