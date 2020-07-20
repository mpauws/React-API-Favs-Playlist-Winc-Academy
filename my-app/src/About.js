import React from "react";

function About() {
   return (
      <div className="about-page">
         <h1>About Winc Lil' Playlist</h1>
         <p>
            What started out as an assignment for the intensive 6 week Winc Front-end Development course has turned out
            to be cultural phenomenon that rivals the popularity of Shazam. With a spectacular total of 2 users it has
            been rated as the best new React creation by Wired Magazine:
         </p>
         <p className="quote">
            <em>
               "A fabulous app for adding your favourite songs to a list you can whip out at those boring parties where
               the DJ clearly has no idea what the crowd wants."
            </em>
         </p>

         <p>Party on, Wayne!</p>
         <p>Party on, Garth!</p>
         <div className="image-wrapper">
            <img alt="party on" src={require("./media/headbanging.gif")} />
         </div>
      </div>
   );
}

export default About;
