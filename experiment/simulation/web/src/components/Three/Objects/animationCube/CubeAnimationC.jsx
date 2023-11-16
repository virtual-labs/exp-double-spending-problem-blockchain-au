import React, { useEffect, useRef, useState } from "react";
import { useFrame, useLoader } from "react-three-fiber";
import * as THREE from "three";
import ledger from "../../../../assets/images/ledger.jpg";
import { useDispatch, useSelector } from "react-redux";
import { updateInstruction } from "../../../../redux/slices/doubleSpendingSlice";

const CubeAnimationC = () => {
  const ledgerTexture = useLoader(THREE.TextureLoader, ledger);
  const dispatch = useDispatch();
  const { instructionMessage, verifierName } = useSelector(
    (state) => state.DoubleSpendingReducer
  );
  const [state, setState] = useState({
    d: true,
    e: true,
    b: true,
    a: true,
    aHide: false,
    eHide: false,
    dHide: false,
    bHide: false,
  });
  const cubeD = useRef();
  const cubeE = useRef();
  const cubeA = useRef();
  const cubeB = useRef();

  useFrame(() => {
    if (state.b) {
      cubeB.current.position.y += 0.03;
      cubeB.current.position.x -= 0.03;
    }
    if (state.d) {
      cubeD.current.position.y -= 0.03;
      cubeD.current.position.x -= 0.03;
    }
    if (state.e) {
      cubeE.current.position.x -= 0.03;
    }
    if (state.a) {
      cubeA.current.position.x -= 0.03;
    }
  });

  useEffect(() => {
    let timer;
    timer = setTimeout(() => {
      setState((prev) => ({
        ...prev,
        d: false,
        dHide: true,
        bHide: true,
        b: false,
      }));

      setTimeout(() => {
        setState((prev) => ({
          ...prev,
          aHide: true,
          a: false,
          e: false,
          eHide: true,
        }));
      }, 1800);
      dispatch(
        updateInstruction([
          ...instructionMessage,
          `User-${verifierName} can now pass the transaction ledger to other users for additional verification`,
        ])
      );
      const dispatch = useDispatch();
      const { instructionMessage, verifierName } = useSelector(
        (state) => state.DoubleSpendingReducer
      );
    }, 1800);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <group>
      <mesh scale={state.bHide ? 0 : 1} position={[4, 0, 0]} ref={cubeB}>
        <boxGeometry args={[0.5, 0.2, 0.5]} />
        <meshBasicMaterial map={ledgerTexture} />
      </mesh>
      <mesh scale={state.dHide ? 0 : 1} position={[3.7, 0, 0]} ref={cubeD}>
        <boxGeometry args={[0.5, 0.2, 0.5]} />
        <meshBasicMaterial map={ledgerTexture} />
      </mesh>
      <mesh position={[3.7, 0, 0]} scale={state.aHide ? 0 : 1} ref={cubeA}>
        <boxGeometry args={[0.5, 0.2, 0.5]} />
        <meshBasicMaterial map={ledgerTexture} />
      </mesh>
      <mesh position={[3.7, 0, 0]} scale={state.eHide ? 0 : 1} ref={cubeE}>
        <boxGeometry args={[0.5, 0.2, 0.5]} />
        <meshBasicMaterial map={ledgerTexture} />
      </mesh>
    </group>
  );
};

export default CubeAnimationC;
