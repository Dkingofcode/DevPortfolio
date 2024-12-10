import { useHogwarts } from '../../utils/modelLoader';

export default function HogwartsCastle() {
  const gltf = useHogwarts();

  if (!gltf) {
    return (
      <mesh position={[0, 0, -50]} castShadow receiveShadow>
        <cylinderGeometry args={[20, 25, 40, 8]} />
        <meshStandardMaterial color="#4a5568" />
      </mesh>
    );
  }

  return (
    <primitive
      object={gltf.scene}
      position={[0, 0, -50]}
      scale={[4, 4, 4]}
      castShadow
      receiveShadow
    />
  );
}