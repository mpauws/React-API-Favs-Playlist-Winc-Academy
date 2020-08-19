import React from "react";

function SongSortSelect(props) {
   return (
      <div className="sort-options">
         <label className="sort-options-label">Sort Options</label>
         <select className="select-menu" onChange={props.onChangeSort}>
            <option value="sorting">Select</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            <option value="1star-5star">Rating 1-5</option>
            <option value="5star-1star">Rating 5-1</option>
         </select>
      </div>
   );
}

export default SongSortSelect;
