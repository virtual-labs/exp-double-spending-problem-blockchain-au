import { Html } from "@react-three/drei";
import React from "react";

const Loading = () => {
  return (
    <Html position={[-2, 0, 0]}>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ color: "white", width: "500px" }}>
          <span>Initializing Simulation Sequence... Please wait</span>
        </div>
      </div>
    </Html>
  );
};

export default Loading;
