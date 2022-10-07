import { useLoader } from "@react-three/fiber";
import React from "react";
import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from "three";
import EarthCloudsMap from "../img/8k_earth_clouds.jpg";
import EarthDayMap from "../img/8k_earth_daymap.jpeg";
import EarthNightMap from "../img/8k_earth_nightmap.jpeg";
import EarthSpecularMap from "../img/8k_earth_specular_map.jpeg";
import EarthNormalMap from "../img/8k_earth_normal_map.jpeg";
import * as THREE from "three";

export default function Earth() {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
  );
  return (
    <>
      <ambientLight intensity={1} />
      <mesh>
        <sphereGeometry args={[1.005, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial map={colorMap} normalMap={normalMap} />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        />
      </mesh>
    </>
  );
}
