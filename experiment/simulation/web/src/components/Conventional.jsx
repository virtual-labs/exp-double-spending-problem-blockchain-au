import React, { useEffect, useRef } from "react";
import { Bank } from "./Three/Objects/Bank";
import { UserOne } from "./Three/Objects/UserOne";
import UserOneScene from "./Three/UserOneScene";
import { UserTwo } from "./Three/Objects/User2";
import {
  MeshPortalMaterial,
  MeshReflectorMaterial,
  Text,
} from "@react-three/drei";
import { useDispatch, useSelector } from "react-redux";
import { useFrame, useLoader } from "@react-three/fiber";
import Ledger from "./Three/Ledger";
import { updateShowSideOption } from "../redux/slices/doubleSpendingSlice";
import * as THREE from "three";
import alert from "../assets/images/alert.jpg";
import DDObj from "./Three/Objects/DDObj";
export const Conventional = () => {
  const {
    receiverName,
    moneySendToReciver,
    receiverAmt,
    isCancelation,
    userBalance,
    isReturnAmt,
    enableAlerts,
    waiting,
    request,
  } = useSelector((state) => state.DoubleSpendingReducer);
  const alertTexture = useLoader(THREE.TextureLoader, alert);
  const dispatch = useDispatch();
  console.log(userBalance, isReturnAmt, moneySendToReciver);
  useEffect(() => {
    console.log("hello");
    dispatch(updateShowSideOption(true));
  }, []);
  return (
    <group>
      <group position={[0, 0, -3]}>
        <DDObj
          firstTxt={"Ram"}
          secondTxt={`Balance : ${
            request === "return" ? receiverAmt : waiting ? 0 : userBalance
          } `}
          position={[-5, 1, -0.5]}
        />
        <group rotation={[0, 90, 0]} position={[6, 0, 3]}>
          {receiverName !== "" && (
            <>
              <Text
                color="yellow"
                rotation={[0, 60, 0]}
                position={[0, 3, 0]}
                fontSize={0.16}
              >
                {receiverName}
              </Text>
              <Text
                rotation={[0, 60, 0]}
                color="white"
                position={[0, 2.5, 0]}
                fontSize={0.16}
              >
                {`Balance : ${waiting ? receiverAmt : 0} `}
              </Text>
            </>
          )}

          <UserOne />
          <UserOneScene />
        </group>
        {/* <DDObj
          irstTxt={receiverName}
          secondTxt={`Balance : ${moneySendToReciver ? receiverAmt : 0} `}
          position={[6, 1, 2.9]}
        /> */}
      </group>

      <group rotation={[0, 50, 0]}>
        <Bank />
        {waiting && (
          <mesh position={[0, 1, -1.3]}>
            <boxGeometry args={[3, 1, 0.1]} />
            {/* <MeshPortalMaterial map={alertTexture} /> */}
            <meshBasicMaterial map={alertTexture} />
            <Text
              rotation={[0, 0, 0]}
              color="white"
              position={[0, 0, 0.1]}
              fontSize={0.3}
            >
              Processing...
            </Text>
          </mesh>
        )}
      </group>
    </group>
  );
};
