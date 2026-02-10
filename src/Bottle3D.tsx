import React, { Suspense, useLayoutEffect, useState, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { useGLTF, Environment, OrbitControls, Center } from "@react-three/drei";
import * as THREE from "three";

// Professional gradient background
const GradientBackground = () => {
  const { scene } = useThree();

  useEffect(() => {
    // Create gradient texture
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 512;
    const context = canvas.getContext("2d");

    // Null check for context
    if (!context) return;

    // Create radial gradient
    const gradient = context.createRadialGradient(256, 256, 0, 256, 256, 256);
    gradient.addColorStop(0, "#ffffff");
    gradient.addColorStop(0.5, "#f0f9ff");
    gradient.addColorStop(1, "#e0f2fe");

    context.fillStyle = gradient;
    context.fillRect(0, 0, 512, 512);

    const texture = new THREE.CanvasTexture(canvas);
    scene.background = texture;

    return () => {
      scene.background = null;
    };
  }, [scene]);

  return null;
};

const Model = ({ scale = 1 }) => {
  const { scene } = useGLTF("/clean-bootle.glb");

  useLayoutEffect(() => {
    if (!scene) return;

    // Calculate bounding box to properly center and scale
    const box = new THREE.Box3().setFromObject(scene);
    const center = box.getCenter(new THREE.Vector3());

    // Center the model
    scene.position.x = -center.x;
    scene.position.y = -center.y;
    scene.position.z = -center.z;

    scene.traverse((obj) => {
      if ((obj as THREE.Mesh).isMesh) {
        const mesh = obj as THREE.Mesh;

        mesh.castShadow = true;
        mesh.receiveShadow = true;

        // Enhance existing materials
        if (mesh.material) {
          const material = mesh.material as THREE.MeshStandardMaterial;
          if (material.transparent || material.opacity < 1) {
            material.envMapIntensity = 2.0;
            material.needsUpdate = true;
          }
        }
      }
    });
  }, [scene]);

  const sceneClone = React.useMemo(() => {
    const clone = scene.clone();
    clone.rotation.y = Math.PI + 0.55; // 180-degree rotation to show label

    // Enhance materials for crisp quality
    clone.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (mesh.material) {
          const material = mesh.material as THREE.MeshStandardMaterial;

          // Enhance texture quality for maximum sharpness
          if (material.map) {
            material.map.anisotropy = 16; // Max anisotropic filtering
            material.map.minFilter = THREE.LinearFilter;
            material.map.magFilter = THREE.LinearFilter;
            material.map.needsUpdate = true;
          }

          material.needsUpdate = true;
        }
      }
    });

    return clone;
  }, [scene]);

  return <primitive object={sceneClone} scale={scale} />;
};

interface Bottle3DProps {
  className?: string;
  scale?: number;
  autoRotate?: boolean;
  showExport?: boolean;
  verticalOffset?: number;
}

const Bottle3D: React.FC<Bottle3DProps> = ({
  className = "",
  scale = 2,
  autoRotate = false,
  verticalOffset = 0,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  // Loading fallback
  const LoadingSpinner = () => (
    <mesh>
      <boxGeometry args={[0.5, 2, 0.5]} />
      <meshStandardMaterial color="#06b6d4" wireframe />
    </mesh>
  );

  return (
    <div
      className={`relative ${className} bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50 rounded-lg overflow-hidden`}
    >
      <Canvas
        camera={{
          position: [0, 0, 5.5],
          fov: 40,
          near: 0.1,
          far: 1000,
        }}
        gl={{
          preserveDrawingBuffer: true,
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.0,
          outputColorSpace: THREE.SRGBColorSpace,
        }}
        dpr={[1, 1.5]}
        frameloop="demand"
        onCreated={() => setIsLoading(false)}
      >
        <GradientBackground />

        {/* Enhanced Lighting for transparent bottle */}
        <ambientLight intensity={0.6} />

        {/* Main Front Light - Illuminates the label */}
        <directionalLight
          position={[0, 2, 5]}
          intensity={0.0}
          color="#ffffff"
        />

        {/* Key Light - Front Top */}
        <directionalLight
          position={[5, 8, 8]}
          intensity={1.5}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
          shadow-bias={-0.0001}
        />

        {/* Fill Light - Left Side */}
        <directionalLight
          position={[-5, 3, 5]}
          intensity={1.2}
          color="#e0f2fe"
        />

        {/* Fill Light - Right Side */}
        <directionalLight
          position={[5, 3, 5]}
          intensity={1.2}
          color="#f0f9ff"
        />

        {/* Back Light - Creates rim lighting effect */}
        <directionalLight
          position={[0, 5, -10]}
          intensity={1.8}
          color="#06b6d4"
        />

        {/* Bottom Light - Illuminates bottle from below */}
        <pointLight position={[0, -3, 5]} intensity={1.0} color="#ffffff" />

        {/* Top spotlight for highlights */}
        <spotLight
          position={[0, 10, 0]}
          angle={0.3}
          penumbra={1}
          intensity={1.5}
          color="#ffffff"
        />

        {/* Front spotlight for extra brightness */}
        <spotLight
          position={[0, 0, 8]}
          angle={0.5}
          penumbra={1}
          intensity={2.0}
          color="#ffffff"
        />

        <Suspense fallback={<LoadingSpinner />}>
          <Center position={[0, verticalOffset, 0]}>
            <Model scale={scale * 0.015} />
          </Center>

          <Environment preset="city" environmentIntensity={0.8} />

          {/* High-quality shadow */}
          <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -2.8, 0]}
            receiveShadow
          >
            <planeGeometry args={[10, 10, 32, 32]} />
            <shadowMaterial transparent opacity={0.12} />
          </mesh>
        </Suspense>

        <OrbitControls
          enableZoom={false}
          autoRotate={autoRotate}
          autoRotateSpeed={1.5}
          enablePan={false}
          // Horizontal rotation only
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          // Allow full 360 horizontal rotation
          minAzimuthAngle={-Infinity}
          maxAzimuthAngle={Infinity}
          target={[0, 0, 0]}
          enableDamping
          dampingFactor={0.08}
          rotateSpeed={0.5}
        />
      </Canvas>

      {/* Loading Indicator */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500"></div>
        </div>
      )}
    </div>
  );
};

// Preload the model
useGLTF.preload("/clean-bootle.glb");

export default Bottle3D;
