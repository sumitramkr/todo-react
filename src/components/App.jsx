import React from "react";
import List from "./List";

function App() {
  const [list, setList] = React.useState("");
  const [arrayList, setArrayList] = React.useState([]);

  function handleChange(event) {
    const values = event.target.value;
    setList(values);
  }

  function handleClick() {
    setArrayList((arrayList) => [...arrayList, list]);
    setList("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={list} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {arrayList.map((items) => (
            <List items={items} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
