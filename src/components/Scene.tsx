import { Suspense } from 'react';
import { Environment, OrbitControls, PerspectiveCamera, Sky } from '@react-three/drei';
import Broomstick from './models/Broomstick';
import Character from './models/Character';
import HogwartsCastle from './models/HogwartsCastle';
import Terrain from './models/Terrain';
import Obstacles from './models/Obstacles';
import MagicalEffects from './effects/MagicalEffects';
import { Physics } from '@react-three/rapier';

export default function Scene() {
  return (
    <Suspense fallback={null}>
      <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} />
      <Environment preset="sunset" />
      <PerspectiveCamera makeDefault position={[0, 2, 6]} />
      <OrbitControls maxPolarAngle={Math.PI * 0.45} />

      <Physics debug={false}>
        <Broomstick />
        <Character />
        <HogwartsCastle />
        <Terrain />
        <Obstacles />
      </Physics>

      <MagicalEffects />
      
      <directionalLight
        castShadow
        position={[4, 4, 1]}
        intensity={1.5}
        shadow-mapSize={[1024, 1024]}
      />
      <ambientLight intensity={0.5} />
      <fog attach="fog" args={['#17171b', 30, 110]} />
    </Suspense>
  );
}