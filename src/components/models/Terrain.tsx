import { RigidBody } from '@react-three/rapier';

export default function Terrain() {
  return (
    <RigidBody type="fixed" colliders="trimesh">
      <mesh receiveShadow position={[0, -2, 0]} rotation-x={-Math.PI * 0.5}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial 
          color="#1a472a"
          metalness={0}
          roughness={0.8}
        />
      </mesh>
    </RigidBody>
  );
}