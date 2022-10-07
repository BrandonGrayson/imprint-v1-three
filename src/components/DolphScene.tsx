import { Canvas } from "@react-three/fiber";
import "./css/dolph.css";

export default function DolphScene() {
  return (
    <div id="canvas">
      <Canvas>
        <mesh>
          <torusGeometry args={[10, 3, 16, 100]} />
          <meshStandardMaterial color="0xff6347" wireframe={true} />
        </mesh>
      </Canvas>
    </div>
  );
}
