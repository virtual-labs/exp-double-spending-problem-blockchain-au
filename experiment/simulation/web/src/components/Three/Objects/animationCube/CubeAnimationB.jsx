import React, { useEffect, useRef, useState } from "react";
import { useFrame, useLoader } from "react-three-fiber";
import * as THREE from "three";
import ledger from "../../../../assets/images/ledger.jpg";
import { updateInstruction } from "../../../../redux/slices/doubleSpendingSlice";
import { useDispatch, useSelector } from "react-redux";

const CubeAnimationB = () => {
  const ledgerTexture = useLoader(THREE.TextureLoader, ledger);
  const dispatch = useDispatch();
  const { instructionMessage, verifierName } = useSelector(
    (state) => state.DoubleSpendingReducer
  );
  const [state, setState] = useState({
    c: true,
    d: true,
    a: true,
    e: true,
    aHide: false,
    dHide: false,
    cHide: false,
    eHide: false,
  });
  const cubeC = useRef();
  const cubeD = useRef();
  const cubeA = useRef();
  const cubeE = useRef();

  useFrame(() => {
    if (state.a) {
      cubeA.current.position.x -= 0.05;
      cubeA.current.position.z += 0.02;
      cubeA.current.position.y -= 0.05;
    }
    if (state.c) {
      cubeC.current.position.x += 0.05;
      cubeC.current.position.z += 0.02;
      cubeC.current.position.y -= 0.05;
    }
    if (state.e) {
      cubeE.current.position.y -= 0.05;
    }
    if (state.d) {
      cubeD.current.position.y -= 0.05;
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
          eHide: true,
          e: false,
          d: false,
          dHide: true,
        }));
      }, 1200);
      dispatch(
        updateInstruction([
          ...instructionMessage,
          `User-${verifierName} can now pass the transaction ledger to other users for additional verification`,
          ,
        ])
      );
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <group>
      <mesh scale={state.aHide ? 0 : 1} position={[0.4, 3, 0]} ref={cubeA}>
        <boxGeometry args={[0.5, 0.2, 0.5]} />
        <meshBasicMaterial map={ledgerTexture} />
      </mesh>
      <mesh scale={state.cHide ? 0 : 1} position={[0.3, 3, 0]} ref={cubeC}>
        <boxGeometry args={[0.5, 0.2, 0.5]} />
        <meshBasicMaterial map={ledgerTexture} />
      </mesh>
      <mesh position={[0.5, 3, 0]} scale={state.eHide ? 0 : 1} ref={cubeE}>
        <boxGeometry args={[0.5, 0.2, 0.5]} />
        <meshBasicMaterial map={ledgerTexture} />
      </mesh>
      <mesh position={[0.5, 3, 0]} scale={state.dHide ? 0 : 1} ref={cubeD}>
        <boxGeometry args={[0.5, 0.2, 0.5]} />
        <meshBasicMaterial map={ledgerTexture} />
      </mesh>
    </group>
  );
};

export default CubeAnimationB;
