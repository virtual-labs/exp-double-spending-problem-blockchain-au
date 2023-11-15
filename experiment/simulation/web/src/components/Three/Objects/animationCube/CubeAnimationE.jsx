import React, { useEffect, useRef, useState } from "react";
import { useFrame, useLoader } from "react-three-fiber";
import * as THREE from "three";
import ledger from "../../../../assets/images/ledger.jpg";
import { updateInstruction } from "../../../../redux/slices/doubleSpendingSlice";
import { useDispatch, useSelector } from "react-redux";
const CubeAnimationE = () => {
  const dispatch = useDispatch();
  const { instructionMessage, verifierName } = useSelector(
    (state) => state.DoubleSpendingReducer
  );
  const [state, setState] = useState({
    d: true,
    c: true,
    b: true,
    a: true,
    aHide: false,
    cHide: false,
    dHide: false,
    bHide: false,
  });
  const cubeD = useRef();
  const cubeC = useRef();
  const cubeA = useRef();
  const cubeB = useRef();
  const ledgerTexture = useLoader(THREE.TextureLoader, ledger);
  useFrame(() => {
    if (state.b) {
      cubeB.current.position.y += 0.03;
    }
    if (state.d) {
      cubeD.current.position.y -= 0.03;
    }
    if (state.c) {
      cubeC.current.position.x -= 0.03;
    }
    if (state.a) {
      cubeA.current.position.x += 0.03;
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
          c: false,
          cHide: true,
        }));
      }, 100);
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
      <mesh scale={state.bHide ? 0 : 1} position={[0.5, 0, 0]} ref={cubeB}>
        <boxGeometry args={[0.5, 0.2, 0.5]} />
        <meshBasicMaterial map={ledgerTexture} />
      </mesh>
      <mesh scale={state.dHide ? 0 : 1} position={[0.5, 0, 0]} ref={cubeD}>
        <boxGeometry args={[0.5, 0.2, 0.5]} />
        <meshBasicMaterial map={ledgerTexture} />
      </mesh>
      <mesh position={[0.5, 0, 0]} scale={state.aHide ? 0 : 1} ref={cubeA}>
        <boxGeometry args={[0.5, 0.2, 0.5]} />
        <meshBasicMaterial map={ledgerTexture} />
      </mesh>
      <mesh position={[0.5, 0, 0]} scale={state.cHide ? 0 : 1} ref={cubeC}>
        <boxGeometry args={[0.5, 0.2, 0.5]} />
        <meshBasicMaterial map={ledgerTexture} />
      </mesh>
    </group>
  );
};

export default CubeAnimationE;
