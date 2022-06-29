import React from "react";

function Input(props) {
  const [list, setList] = React.useState("");

  function handleChange(event) {
    const values = event.target.value;
    setList(values);
  }

  return (
    <div className="form">
      <input type="text" onChange={handleChange} value={list} />
      <button
        onClick={() => {
          props.click(list, setList);
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default Input;
