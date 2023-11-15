import { Line, QuadraticBezierLine, Text } from "@react-three/drei";
import React, { useRef } from "react";
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import img from "../../../textures/cubeText1.jpg";
import { useSelector } from "react-redux";
import { Verified } from "@mui/icons-material";
import CubeAnimationB from "./animationCube/CubeAnimationB";
import CubeAnimationD from "./animationCube/CubeAnimationD";
import CubeAnimationC from "./animationCube/CubeAnimationC";
import CubeAnimationE from "./animationCube/CubeAnimationE";
const BlockChain = () => {
  const innerCube1 = useRef();
  const innerCube2 = useRef();
  const innerCube3 = useRef();
  const innerCube4 = useRef();
  const innerCube5 = useRef();
  const texture = useLoader(THREE.TextureLoader, img);
  const {
    receiverName,
    receiverAmt,
    selectedColor,
    verifierName,
    showLedgerAnimation,
  } = useSelector((state) => state.DoubleSpendingReducer);
  const { sender, receiver, verifier } = selectedColor;
  useFrame(() => {
    innerCube1.current.rotation.y += 0.03;
    innerCube2.current.rotation.y += 0.03;
    innerCube3.current.rotation.y += 0.03;
    innerCube4.current.rotation.y += 0.03;
    innerCube5.current.rotation.y += 0.03;
    // innerCube.current.rotation.z += 0.01;
  });

  return (
    <group>
      <group>
        <group position={[-1, 0, 0]}>
          <mesh position={[-2, 0, 0]}>
            <boxGeometry args={[1.5, 1.5, 1.5]} />
            <meshBasicMaterial color={sender} transparent opacity={0.3} />
          </mesh>
          <mesh ref={innerCube1} position={[-2, 0, 0]}>
            <boxGeometry args={[0.8, 0.8, 0.8]} />
            <meshBasicMaterial map={texture} />
          </mesh>
          <Text scale={0.3} position={[-3.2, 0, 0]}>
            A
          </Text>
          {/* <mesh position={[-4.5, 0, 0]}>
            <boxGeometry args={[1, 1, 0.1]} />
            <meshBasicMaterial />
          </mesh> */}
        </group>
        <group position={[0, 1, 0]}>
          <mesh position={[0.5, 2, 0]}>
            <boxGeometry args={[1.5, 1.5, 1.5]} />
            <meshBasicMaterial
              color={
                verifierName === "B"
                  ? verifier
                  : receiverName === "B"
                  ? receiver
                  : "#ddddff"
              }
              transparent
              opacity={0.2}
            />
          </mesh>
          <mesh ref={innerCube2} position={[0.5, 2, 0]}>
            <boxGeometry args={[0.8, 0.8, 0.8]} />
            <meshBasicMaterial map={texture} />
          </mesh>
          <Text scale={0.3} position={[0.5, 3, 0]}>
            B
          </Text>
          {/* <mesh position={[0.5, 4, 0]}>
            <boxGeometry args={[1, 1, 0.1]} />
            <meshBasicMaterial />
          </mesh> */}
        </group>
        <group position={[1, 0, 0]}>
          <mesh position={[3, 0, 0]}>
            <boxGeometry args={[1.5, 1.5, 1.5]} />
            <meshBasicMaterial
              color={
                verifierName === "C"
                  ? verifier
                  : receiverName === "C"
                  ? receiver
                  : "#ddddff"
              }
              transparent
              opacity={0.3}
            />
          </mesh>
          <mesh ref={innerCube3} position={[3, 0, 0]}>
            <boxGeometry args={[0.8, 0.8, 0.8]} />
            <meshBasicMaterial map={texture} />
          </mesh>
          <Text scale={0.3} position={[4.2, 0, 0]}>
            C
          </Text>
          {/* <mesh position={[5, 0, 0]}>
            <boxGeometry args={[1, 1, 0.1]} />
            <meshBasicMaterial />
          </mesh> */}
        </group>
        <group position={[0, -1, 0]}>
          <mesh position={[0.5, -2, 0]}>
            <boxGeometry args={[1.5, 1.5, 1.5]} />
            <meshBasicMaterial
              color={
                verifierName === "D"
                  ? verifier
                  : receiverName === "D"
                  ? receiver
                  : "#ddddff"
              }
              transparent
              opacity={0.3}
            />
          </mesh>
          <mesh ref={innerCube4} position={[0.5, -2, 0]}>
            <boxGeometry args={[0.8, 0.8, 0.8]} />
            <meshBasicMaterial map={texture} />
          </mesh>
          <Text scale={0.3} position={[0.5, -3.3, 0]}>
            D
          </Text>
          {/* <mesh position={[0.5, -4, 0]}>
            <boxGeometry args={[1, 1, 0.1]} />
            <meshBasicMaterial />
          </mesh> */}
        </group>
        <group>
          <mesh position={[0.5, 0, 0]}>
            <boxGeometry args={[1.5, 1.5, 1.5]} />
            <meshBasicMaterial
              color={
                verifierName === "E"
                  ? verifier
                  : receiverName === "E"
                  ? receiver
                  : "#ddddff"
              }
              transparent
              opacity={0.3}
            />
          </mesh>
          <mesh ref={innerCube5} position={[0.5, 0, 0]}>
            <boxGeometry args={[0.8, 0.8, 0.8]} />
            <meshBasicMaterial map={texture} />
          </mesh>
          <Text scale={0.3} position={[0.7, 1, 0]}>
            E
          </Text>
          {/* <mesh position={[0.5, 1.5, 0]}>
            <boxGeometry args={[1, 1, 0.1]} />
            <meshBasicMaterial />
          </mesh> */}
        </group>
      </group>
      <group>
        <Line
          points={[
            [0.5, 2.2, 0],
            [0.5, 0.8, 0],
          ]}
          lineWidth={5}
          color={"#034179"}
        />
        <Line
          points={[
            [0.5, -2.2, 0],
            [0.5, 0.8, 0],
          ]}
          lineWidth={5}
          color={"#034179"}
        />
        <Line
          points={[
            [1.3, 3, 0],
            [3.9, 0.8, 0],
          ]}
          lineWidth={5}
          color={"#034179"}
        />
        <group>
          <Line
            points={[
              [-0.3, 3, 0],
              [-3, 0.8, 0],
            ]}
            lineWidth={5}
            color={receiverName === "B" ? sender : "#034179"}
            opacity={0.5}
          />
          {receiverName === "B" && (
            <Text
              color={"yellow"}
              position={[-2, 2, 0]}
              rotation={[0, 0, 6.95]}
              scale={0.23}
            >
              sending {receiverAmt}Rs
            </Text>
          )}
        </group>
        <group>
          <Line
            points={[
              [-3, -0.8, 0],
              [-0.3, -3, 0],
            ]}
            lineWidth={5}
            color={receiverName === "D" ? sender : "#034179"}
          />
          {receiverName === "D" && (
            <Text
              color={"yellow"}
              position={[-2, -2, 0]}
              rotation={[0, 0, -6.95]}
              scale={0.23}
            >
              sending {receiverAmt}Rs
            </Text>
          )}
        </group>

        <Line
          points={[
            [4, -0.8, 0],
            [1.3, -3, 0],
          ]}
          lineWidth={5}
          color={"#034179"}
        />

        <group>
          {receiverName === "E" && (
            <Text
              color={"yellow"}
              position={[-1.2, 0.5, 0]}
              rotation={[0, 0, 0]}
              scale={0.23}
            >
              sending {receiverAmt}Rs
            </Text>
          )}

          <Line
            points={[
              [-2.23, 0, 0],
              [-0.3, -0, 0],
            ]}
            lineWidth={5}
            color={
              receiverName === "C" || receiverName === "E" ? sender : "#034179"
            }
          />
        </group>
        <group>
          <Line
            points={[
              [1.3, 0, 0],
              [3.25, -0, 0],
            ]}
            lineWidth={5}
            color={receiverName === "C" ? sender : "#034179"}
          />
          {receiverName === "C" && (
            <Text
              color={"yellow"}
              position={[2.2, 0.5, 0]}
              rotation={[0, 0, 0]}
              scale={0.23}
            >
              sending {receiverAmt}Rs
            </Text>
          )}
        </group>

        <group>
          {showLedgerAnimation && verifierName === "B" && <CubeAnimationB />}
          {showLedgerAnimation && verifierName === "D" && <CubeAnimationD />}
          {showLedgerAnimation && verifierName === "C" && <CubeAnimationC />}
          {showLedgerAnimation && verifierName === "E" && <CubeAnimationE />}
        </group>
      </group>
    </group>
  );
};

export default BlockChain;
