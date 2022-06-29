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

  function deleteItem(id) {
    setArrayList((arrayList) => {
      return arrayList.filter((items, index) => {
        return index !== id;
      });
    });
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
          {arrayList.map((items, index) => (
            <List key={index} id={index} items={items} onCheck={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
