import "./App.css";
import React, { useState } from "react";

function App() {
  const [list, setList] = useState([
    { type: "Vegan", isActive: true },
    { type: "Vegetarian", isActive: true },
    { type: "Veg-Options", isActive: true },
    { type: "Shop", isActive: true },
    { type: "Pro", isActive: true },
  ]);
  const [count, setCount] = useState(0);

  const handleCheck = (index) => {
    let toggle = [...list];
    setCount(count + 1);
    if (count < 1) {
      toggle.forEach((elem) => {
        elem.isActive = false;
      });
    }
    // console.log(toggle.isActive);
    toggle[index].isActive = !toggle[index].isActive;
    setList(toggle);
  };

  return (
    <div className="container">
      {list.map((category, index) => {
        console.log(list);
        return (
          <div
            className={category.isActive ? "buttons active" : "buttons"}
            key={index}
            onClick={() => handleCheck(index)}
          >
            {category.type}
          </div>
        );
      })}
    </div>
  );
}

export default App;
