import React from "react";
import List from "./List";
import Input from "./Input";

function App() {
  const [arrayList, setArrayList] = React.useState([]);

  function handleClick(list, setList) {
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
      <Input click={handleClick} />
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
