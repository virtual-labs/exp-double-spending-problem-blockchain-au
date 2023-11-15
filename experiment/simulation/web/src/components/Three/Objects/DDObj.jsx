import { Text } from "@react-three/drei";
import React from "react";
import { useLoader } from "@react-three/fiber";
import paper from "../../../assets/images/paper.jpg";
import * as THREE from "three";
import { useSelector } from "react-redux";

const DDObj = ({ position, firstTxt, rotation, secondTxt }) => {
  const { receiverName, receiverAmt, userBalance } = useSelector(
    (state) => state.DoubleSpendingReducer
  );
  const paperTexture = useLoader(THREE.TextureLoader, paper);
  console.log(userBalance, receiverAmt);
  return (
    <group rotation={rotation} position={position}>
      <mesh rotation={[0, 50, 0]}>
        <Text color="yellow" position={[0, 1.9, 0]} fontSize={0.16}>
          {firstTxt}
        </Text>
        {(userBalance > 0 || receiverAmt > 0) && (
          <Text color="white" position={[0, 1.5, 0]} fontSize={0.16}>
            {secondTxt}
          </Text>
        )}

        <boxGeometry args={[4, 2, 0.8]} />
        <meshBasicMaterial map={paperTexture} />
      </mesh>
      <mesh position={[-0.2, 0.8, 0.4]} rotation={[0, 50, 0]}>
        <boxGeometry args={[3, 0.3, 0.1]} />
        <meshBasicMaterial color={"white"} />
        <Text color="black" position={[0, 0, 0.1]} fontSize={0.2}>
          DEMAND DRAFT
        </Text>
        <Text color="black" position={[0, 0, 0.1]} fontSize={0.2}>
          DEMAND DRAFT
        </Text>
      </mesh>
      <mesh position={[-0.2, 0.2, 0.4]} rotation={[0, 50, 0]}>
        <boxGeometry args={[3.5, 0.3, 0.1]} />
        <meshBasicMaterial color={"white"} />
        <Text color="black" position={[-1, 0, 0.1]} fontSize={0.2}>
          Name :
        </Text>
        <Text color="blue" position={[1, 0, 0.1]} fontSize={0.2}>
          {receiverName}
        </Text>
      </mesh>

      <mesh position={[-0.2, -0.2, 0.4]} rotation={[0, 50, 0]}>
        <boxGeometry args={[3.5, 0.3, 0.1]} />
        <meshBasicMaterial color={"white"} />
        <Text color="black" position={[-1, 0, 0.1]} fontSize={0.2}>
          amount :
        </Text>
        <Text color="blue" position={[1, 0, 0.1]} fontSize={0.2}>
          {receiverAmt}
        </Text>
      </mesh>
      <mesh position={[1, -0.6, 0.7]} rotation={[0, 50, 0]}>
        <Text color="blue" position={[0, -0.12, 0.1]} fontSize={0.15}>
          Ram
        </Text>
        <Text color="black" position={[0, -0.26, 0.1]} fontSize={0.15}>
          Signature
        </Text>
      </mesh>
    </group>
  );
};

export default DDObj;
