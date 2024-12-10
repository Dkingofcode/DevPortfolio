import { RigidBody } from '@react-three/rapier';
import { useTree, useRock } from '../../utils/modelLoader';

export default function Obstacles() {
  const treeGltf = useTree();
  const rockGltf = useRock();

  const obstacles = [
    { type: 'tree', position: [5, 0, -5] },
    { type: 'tree', position: [-8, 0, -12] },
    { type: 'tree', position: [15, 0, -8] },
    { type: 'rock', position: [-5, 0, 5] },
    { type: 'rock', position: [10, 0, 3] },
    { type: 'dementor', position: [0, 3, -10] },
  ];

  const TreeModel = () => (
    treeGltf ? (
      <primitive
        object={treeGltf.scene.clone()}
        scale={[0.8, 0.8, 0.8]}
        castShadow
      />
    ) : (
      <mesh castShadow>
        <coneGeometry args={[1, 3, 8]} />
        <meshStandardMaterial color="#2d5a27" />
      </mesh>
    )
  );

  const RockModel = () => (
    rockGltf ? (
      <primitive
        object={rockGltf.scene.clone()}
        scale={[1, 1, 1]}
        castShadow
      />
    ) : (
      <mesh castShadow>
        <dodecahedronGeometry args={[1]} />
        <meshStandardMaterial color="#4a5568" />
      </mesh>
    )
  );

  return (
    <>
      {obstacles.map((obstacle, index) => (
        <RigidBody key={index} type="fixed" position={obstacle.position}>
          {obstacle.type === 'tree' && <TreeModel />}
          {obstacle.type === 'rock' && <RockModel />}
          {obstacle.type === 'dementor' && (
            <mesh castShadow>
              <capsuleGeometry args={[0.5, 2]} />
              <meshStandardMaterial color="#000000" transparent opacity={0.7} />
            </mesh>
          )}
        </RigidBody>
      ))}
    </>
  );
}