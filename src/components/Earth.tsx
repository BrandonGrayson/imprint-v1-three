import { useLoader } from "@react-three/fiber";
import React from "react";
import { TextureLoader } from "three";
import EarthCloudsMap from "../img/8k_earth_clouds.jpg";
import EarthDayMap from "../img/8k_earth_daymap.jpeg";
import EarthNightMap from "../img/8k_earth_nightmap.jpeg";
import EarthSpecularMap from "../img/8k_earth_specular_map.jpeg";
import EarthNormalMap from "../img/8k_earth_normal_map.jpeg";

export default function Earth() {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
  );
  return (
    <>
      <ambientLight intensity={1} />
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial map={colorMap} normalMap={normalMap} />
      </mesh>
    </>
  );
}
