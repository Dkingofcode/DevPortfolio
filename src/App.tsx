import Experience from './components/Experience';
import BackgroundMusic from './components/audio/BackgroundMusic';
import { Wand } from 'lucide-react';

export default function App() {
  return (
    <main className="h-screen w-screen">
      <div className="absolute top-4 left-4 z-50 text-white">
        <div className="flex items-center gap-2 bg-black/50 p-4 rounded-lg">
          <Wand className="w-6 h-6" />
          <h1 className="text-2xl font-bold">Hogwarts Express</h1>
        </div>
        <div className="mt-4 bg-black/50 p-4 rounded-lg">
          <p className="mb-2">Controls:</p>
          <ul className="text-sm">
            <li>W/↑ - Move Forward</li>
            <li>S/↓ - Move Backward</li>
            <li>A/← - Turn Left</li>
            <li>D/→ - Turn Right</li>
            <li>Space - Fly Up</li>
            <li>Shift - Fly Down</li>
          </ul>
        </div>
      </div>
      <Experience />
      <BackgroundMusic />
    </main>
  );
}