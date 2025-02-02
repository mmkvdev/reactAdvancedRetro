import React, { useState } from "react";

function HookCounter4() {
  const [items, setItems] = useState([]);

  const addItems = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };

  const deleteItems = (itemID) => {
    const itemToBeDeleted = items.filter((item) => item.id !== itemID);

    setItems(itemToBeDeleted);
  };

  return (
    <div>
      <button onClick={addItems}>Add a number</button>
      <ul>
        {items.map((item) => (
          <div className="list-item">
            <li key={item.id}>{item.value}</li>
            <button onClick={() => deleteItems(item.id)}>Delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default HookCounter4;
