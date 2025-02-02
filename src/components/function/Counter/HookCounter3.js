import React, { useState } from "react";

function HookCounter3() {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });

  return (
    <div>
      <input
        value={name.firstName}
        onChange={(event) =>
          setName({
            ...name,
            firstName: event.target.value,
          })
        }
      />
      <input
        value={name.lastName}
        onChange={(event) =>
          setName({
            ...name,
            lastName: event.target.value,
          })
        }
      />
      <p>First name: {name.firstName}</p>
      <p>Last name: {name.lastName}</p>
      <div>{JSON.stringify(name)}</div>
    </div>
  );
}

export default HookCounter3;
