/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 public/textures/user2.glb 
*/

import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function UserTwo(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "../../../textures/user2.glb"
  );
  const { actions, names } = useAnimations(animations, group);
  useEffect(() => {
    actions[names[0]].reset().fadeIn(0.5).play();
  }, []);
  return (
    <group scale={1.2} ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Armature"
          rotation={[Math.PI / 2, 0, 3]}
          position={[0.2, 0.1, 0.6]}
          scale={0.01}
        >
          <primitive object={nodes.mixamorig12Hips} />
          <skinnedMesh
            name="Ch01_Body"
            geometry={nodes.Ch01_Body.geometry}
            material={materials.Ch01_body}
            skeleton={nodes.Ch01_Body.skeleton}
          />
          <skinnedMesh
            name="Ch01_Eyelashes"
            geometry={nodes.Ch01_Eyelashes.geometry}
            material={materials.Ch01_hair}
            skeleton={nodes.Ch01_Eyelashes.skeleton}
          />
          <skinnedMesh
            name="Ch01_Pants"
            geometry={nodes.Ch01_Pants.geometry}
            material={materials.Ch01_body}
            skeleton={nodes.Ch01_Pants.skeleton}
          />
          <skinnedMesh
            name="Ch01_Shirt"
            geometry={nodes.Ch01_Shirt.geometry}
            material={materials.Ch01_body}
            skeleton={nodes.Ch01_Shirt.skeleton}
          />
          <skinnedMesh
            name="Ch01_Sneakers"
            geometry={nodes.Ch01_Sneakers.geometry}
            material={materials.Ch01_body}
            skeleton={nodes.Ch01_Sneakers.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("../../../textures/user2.glb");