import React from "react";
import SongListItem from "./SongListItem";

function SongList(props) {
   const stateSongs = props.songs;
   const songListItem = stateSongs.map((item) => (
      <SongListItem
         key={item.id}
         songtitle={item.songtitle}
         artist={item.artist}
         genre={item.genre}
         rating={item.rating}
      />
   ));
   return songListItem;
}

export default SongList;
