import { useCharacter } from '../../utils/modelLoader';
import { useGameStore } from '../../store/gameStore';

export default function Character() {
  const gltf = useCharacter();
  const { position, rotation } = useGameStore();

  if (!gltf) {
    return (
      <mesh
        position={[position[0], position[1] - 0.5, position[2]]}
        rotation={rotation}
        castShadow
      >
        <capsuleGeometry args={[0.3, 1, 4]} />
        <meshStandardMaterial color="#2d3748" />
      </mesh>
    );
  }

  return (
    <primitive
      object={gltf.scene}
      position={[position[0], position[1] - 0.5, position[2]]}
      rotation={rotation}
      scale={[0.5, 0.5, 0.5]}
      castShadow
    />
  );
}