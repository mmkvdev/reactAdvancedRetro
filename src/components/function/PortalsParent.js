import React, { useState } from "react";
import PortalsDemo from "./PortalsDemo";

function PortalsParent() {
  const [clicks, setClicks] = useState(0);
  return (
    <div>
      <p>clicks: {clicks}</p>
      <PortalsDemo clickTrack={setClicks} />
    </div>
  );
}

export default PortalsParent;
