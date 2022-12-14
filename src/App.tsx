import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import styled from "styled-components";
import Earth from "./components/Earth";

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <>
      <CanvasContainer>
        <Canvas>
          <Suspense fallback="true">
            <Earth />
          </Suspense>
        </Canvas>
      </CanvasContainer>
    </>
  );
}

export default App;
