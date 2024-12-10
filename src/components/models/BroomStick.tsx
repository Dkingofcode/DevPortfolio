import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useKeyboardControls } from '@react-three/drei';
import { RigidBody, CuboidCollider } from '@react-three/rapier';
import { useGameStore } from '../../store/gameStore';
import { useBroomstick } from '../../utils/modelLoader';

export default function Broomstick() {
  const broomstick = useRef();
  const gltf = useBroomstick();
  const [subscribeKeys, getKeys] = useKeyboardControls();
  const { position, rotation, speed, setPosition, setRotation, setSpeed } = useGameStore();

  useFrame((state, delta) => {
    const { forward, backward, leftward, rightward, up, down } = getKeys();

    const impulse = { x: 0, y: 0, z: 0 };
    const torque = { x: 0, y: 0, z: 0 };

    const impulseStrength = 0.6 * delta;
    const torqueStrength = 0.2 * delta;

    if (forward) {
      impulse.z -= impulseStrength;
      torque.x -= torqueStrength;
    }

    if (rightward) {
      impulse.x += impulseStrength;
      torque.z -= torqueStrength;
    }

    if (backward) {
      impulse.z += impulseStrength;
      torque.x += torqueStrength;
    }

    if (leftward) {
      impulse.x -= impulseStrength;
      torque.z += torqueStrength;
    }

    if (up) impulse.y += impulseStrength;
    if (down) impulse.y -= impulseStrength;

    broomstick.current?.applyImpulse(impulse);
    broomstick.current?.applyTorqueImpulse(torque);
  });

  return (
    <RigidBody
      ref={broomstick}
      position={position}
      enabledRotations={[true, true, true]}
      colliders={false}
    >
      <CuboidCollider args={[0.5, 0.1, 2]} />
      {gltf ? (
        <primitive
          object={gltf.scene}
          scale={[0.3, 0.3, 0.3]}
          rotation={[0, Math.PI / 2, 0]}
        />
      ) : (
        <mesh>
          <cylinderGeometry args={[0.05, 0.05, 2, 8]} />
          <meshStandardMaterial color="#8b4513" />
        </mesh>
      )}
    </RigidBody>
  );
}