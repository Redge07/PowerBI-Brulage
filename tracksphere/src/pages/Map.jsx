import { useState } from "react";

const Map = () => {
  const [cpt, setCpt] = useState(1);
  return (
    <div>
      <h1>Marre2</h1>
      <p>Bonsoir</p> <p>{cpt}</p>{" "}
      <button onClick={() => setCpt((prev) => prev + 1)}>+1</button>
    </div>
  );
};

export default Map;
