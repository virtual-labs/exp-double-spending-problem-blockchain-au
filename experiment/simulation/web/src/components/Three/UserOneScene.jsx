import React from "react";
import { UserOne } from "./Objects/UserOne";
import { Bank } from "./Objects/Bank";
import { Office } from "./Objects/Office";

const UserOneScene = ({ cpuPos }) => {
  return (
    <group>
      <Office cpuPos={cpuPos} />
    </group>
  );
};

export default UserOneScene;
