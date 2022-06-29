import React from "react";

function List(props) {
  //   const [isClicked, setIsClicked] = useState(false);

  //   function handleListClick() {

  // setIsClicked((isClicked) => {
  //   return !isClicked;
  // }); //allows line and unline

  // }

  return (
    <div
      onClick={() => {
        props.onCheck(props.id);
      }}
    >
      <li
      // style={
      //   isClicked
      //     ? { textDecoration: "line-through" }
      //     : { textDecoration: "none" }
      // }
      >
        {props.items}
      </li>
    </div>
  );
}

export default List;
