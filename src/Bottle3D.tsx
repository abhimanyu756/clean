import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  Environment,
  OrbitControls,
  Float,
  ContactShadows,
} from "@react-three/drei";

// This component loads the GLB model
const Model = ({ scale = 1 }: { scale?: number }) => {
  // Ensure your file is named 'bottle.glb' and sits in the public folder
  const { scene } = useGLTF("./public/CleanBottleNew.glb");

  return (
    <primitive
      object={scene}
      scale={scale}
      position={[0, -1, 0]} // Adjust this to center your model vertically
    />
  );
};

interface BottleSceneProps {
  className?: string;
  scale?: number;
  autoRotate?: boolean;
}

const Bottle3D: React.FC<BottleSceneProps> = ({
  className,
  scale = 2,
  autoRotate = true,
}) => {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={1}
        />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />

        <Suspense fallback={null}>
          <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <Model scale={scale} />
          </Float>
          <Environment preset="city" />
          <ContactShadows
            position={[0, -2, 0]}
            opacity={0.4}
            scale={10}
            blur={2.5}
            far={4}
          />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          autoRotate={autoRotate}
          enablePan={false}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
};

// Pre-load the model to avoid pop-in
useGLTF.preload("./public/CleanBottleNew.glb");

export default Bottle3D;
