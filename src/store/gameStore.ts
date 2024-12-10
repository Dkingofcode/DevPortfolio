import { create } from 'zustand';

interface GameState {
  position: [number, number, number];
  rotation: [number, number, number];
  speed: number;
  flying: boolean;
  setPosition: (position: [number, number, number]) => void;
  setRotation: (rotation: [number, number, number]) => void;
  setSpeed: (speed: number) => void;
  setFlying: (flying: boolean) => void;
}

export const useGameStore = create<GameState>((set) => ({
  position: [0, 1, 0],
  rotation: [0, 0, 0],
  speed: 0,
  flying: false,
  setPosition: (position) => set({ position }),
  setRotation: (rotation) => set({ rotation }),
  setSpeed: (speed) => set({ speed }),
  setFlying: (flying) => set({ flying }),
}));