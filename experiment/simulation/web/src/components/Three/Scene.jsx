import React, { Suspense, useEffect } from "react";
import { Canvas, extend } from "@react-three/fiber";
import { Effects, Html, OrbitControls, Sparkles } from "@react-three/drei";
import BlockChain from "./Objects/BlockChain";
import { useSelector } from "react-redux";
import { Conventional } from "../Conventional";
import { UnrealBloomPass } from "three-stdlib";
import Loading from "../../components/common/Loading";
import DDObj from "./Objects/DDObj";

extend({ UnrealBloomPass });

const Scene = () => {
  const { playBlockChain, showCard, radioClicked } = useSelector(
    (state) => state.DoubleSpendingReducer
  );

  return (
    <Canvas
      camera={{
        fov: 20,
        position: radioClicked === "conventional" ? [-10, 5, 30] : [-1, 5, 30],
      }}
      style={{ height: "100vh", position: "absolute" }}
    >
      <Suspense fallback={<Loading />}>
        <Effects disableGamma>
          <unrealBloomPass threshold={1} strength={1} radius={1} />
        </Effects>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />

        {playBlockChain === "conventional" &&
          radioClicked === "conventional" &&
          showCard && <Conventional />}
        {playBlockChain === "playBlockChain" &&
          radioClicked === "blockChain" &&
          showCard && <BlockChain />}

        <Sparkles count={200} scale={[60, 20, 10]} size={1.5} speed={2} />
        <mesh
          castShadow
          receiveShadow
          material-color="#778"
          position={[-0.1, 0.03, 0.07]}
        />
        <color attach="background" args={["#2e3747"]} />
        <OrbitControls
          enableZoom={radioClicked === "conventional" ? false : true}
        />
      </Suspense>
    </Canvas>
  );
};

export default Scene;
