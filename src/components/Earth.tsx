import EarthDayMap from "../../src/assets/textures/8k_earth_daymap.jpg";
import EarthNormalMap from "../../src/assets/textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../../src/assets/textures/8k_earth_specular_map.jpg";
import EarthCloudMap from "../../src/assets/textures/8k_earth_clouds.jpg";
import { TextureLoader } from "three";
import { OrbitControls } from "@react-three/drei";
// import * as THREE from "three"
import { Stars } from "@react-three/drei/core";
import  { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Mesh } from 'three';

const Earth = () => {
  const [colourMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudMap]
  );

  const earthRef = useRef<Mesh>(null);
  const cloudsRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
if (earthRef.current) {
      earthRef.current.rotation.y = elapsedTime / 6;
    }

    if (cloudsRef.current) {
      cloudsRef.current.rotation.y = elapsedTime / 6;
    }

  
  });

 

  return (
    <>
      <ambientLight intensity={1} />
      <pointLight color="#fff" position={[1,0,2]} intensity={1.2} />
      <Stars radius={300}  depth={60} count={3000} factor={5} fade={true} />
      <mesh ref={cloudsRef} >
        <sphereGeometry args={[1.8005, 32, 32]} />
        <meshPhongMaterial map={cloudsMap} opacity={0.4} depthWrite={true} transparent={true}   />
        {/* <meshPhongMaterial map={cloudsMap} opacity={0.4} depthWrite={true} transparent={true} side={THREE.DoubleSide} /> */}
      </mesh>
      <mesh ref={earthRef} >
        <sphereGeometry args={[1.8, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial map={colourMap} normalMap={normalMap}  metalness={0.4} roughness={0.7}/>
        <OrbitControls
          // enableZoom={true}
          // maxZoom={0.1}
          enableZoom={false}
          enablePan={true}
          enableRotate={true}
          // zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        />
      </mesh>
    </>
  );
};

export default Earth;
