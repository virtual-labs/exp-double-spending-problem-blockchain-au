import React from "react";

const Glowcube = ({ position }) => {
  return (
    <mesh position={position}>
      <boxGeometry args={[0.2, 0.2, 0.2]} />
      <meshStandardMaterial emissive={"yellow"} />
    </mesh>
  );
};

export default Glowcube;
