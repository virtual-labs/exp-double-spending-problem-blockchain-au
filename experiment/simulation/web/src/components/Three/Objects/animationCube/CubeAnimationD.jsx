import React, { useEffect, useRef, useState } from "react";
import { useFrame, useLoader } from "react-three-fiber";
import * as THREE from "three";
import ledger from "../../../../assets/images/ledger.jpg";
import { updateInstruction } from "../../../../redux/slices/doubleSpendingSlice";
import { useDispatch, useSelector } from "react-redux";

const CubeAnimationD = () => {
  const ledgerTexture = useLoader(THREE.TextureLoader, ledger);
  const dispatch = useDispatch();
  const { instructionMessage, verifierName } = useSelector(
    (state) => state.DoubleSpendingReducer
  );
  const [state, setState] = useState({
    c: true,
    b: true,
    a: true,
    e: true,
    aHide: false,
    eHide: false,
    cHide: false,
    bHide: false,
  });
  const cubeC = useRef();
  const cubeE = useRef();
  const cubeA = useRef();
  const cubeB = useRef();

  useFrame(() => {
    if (state.a) {
      cubeA.current.position.y += 0.03;
      cubeA.current.position.x -= 0.03;
    }
    if (state.c) {
      cubeC.current.position.y += 0.03;
      cubeC.current.position.x += 0.03;
    }
    if (state.e) {
      cubeE.current.position.y += 0.03;
    }
    if (state.d) {
      cubeD.current.position.y += 0.03;
    }
  });

  useEffect(() => {
    let timer;
    timer = setTimeout(() => {
      setState((prev) => ({
        ...prev,
        a: false,
        aHide: true,
        cHide: true,
        c: false,
      }));

      setTimeout(() => {
        setState((prev) => ({
          ...prev,
          bHide: true,
          b: false,
          e: false,
          eHide: true,
        }));
      }, 1700);
      dispatch(
        updateInstruction([
          ...instructionMessage,
          `User-${verifierName} can now pass the transaction ledger to other users for additional verification`,
        ])
      );
    }, 1800);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <group>
      <mesh scale={state.aHide ? 0 : 1} position={[0.1, -3, 0]} ref={cubeA}>
        <boxGeometry args={[0.5, 0.2, 0.5]} />
        <meshBasicMaterial map={ledgerTexture} />
      </mesh>
      <mesh scale={state.cHide ? 0 : 1} position={[0.3, -3, 0]} ref={cubeC}>
        <boxGeometry args={[0.5, 0.2, 0.5]} />
        <meshBasicMaterial map={ledgerTexture} />
      </mesh>
      <mesh position={[0.5, -3, 0]} scale={state.bHide ? 0 : 1} ref={cubeB}>
        <boxGeometry args={[0.5, 0.2, 0.5]} />
        <meshBasicMaterial map={ledgerTexture} />
      </mesh>
      <mesh position={[0.5, -3, 0]} scale={state.eHide ? 0 : 1} ref={cubeE}>
        <boxGeometry args={[0.5, 0.2, 0.5]} />
        <meshBasicMaterial map={ledgerTexture} />
      </mesh>
    </group>
  );
};

export default CubeAnimationD;
