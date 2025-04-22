import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model() {
  const group = useRef();
  const { scene } = useGLTF('/models/scene.glb');
  
  useFrame(() => {
    group.current.rotation.y += 0.005;
  });

  return <primitive object={scene} ref={group} scale={18} />;
}

export default function ModelViewer() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={40} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Model />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}