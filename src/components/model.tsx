import React, { useRef } from 'react'
import { MeshTransmissionMaterial, useGLTF, Text } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

export default function Model() {
       const { nodes } = useGLTF("/medias/torrus.glb");
       const { viewport } = useThree()
       const torus = useRef(null);

       useFrame(() => {
              if (torus.current) {
                     (torus.current as THREE.Object3D).rotation.x += 0.018
              }
       })

       return (
              <group scale={viewport.width / 3.75} >
                     <Text font={'/fonts/PPNeueMontreal-Bold.otf'} position={[0, 0, -1]} fontSize={2} color="white" anchorX="center" anchorY="middle">
                            AB
                     </Text>
                     <mesh ref={torus} {...nodes.Torus002}>
                            <MeshTransmissionMaterial thickness={0.2} roughness={0.1} transmission={1} ior={1.2} chromaticAberration={0.02} backside={true} />
                     </mesh>
              </group>
       )
}
