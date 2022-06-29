import React, { useState } from "react";

function List(props) {
  const [isClicked, setIsClicked] = useState(false);

  function handleListClick() {
    // setIsClicked(true);
    setIsClicked((isClicked) => {
      return !isClicked;
    }); //allows line and unline
  }

  //   function listCSS() {
  //     return isClicked
  //       ? { textDecoration: "line-through" }
  //       : { textDecoration: "none" };
  //   }

  return (
    <div onClick={handleListClick}>
      <li
        style={
          isClicked
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
      >
        {props.items}
      </li>
    </div>
  );
}

export default List;
