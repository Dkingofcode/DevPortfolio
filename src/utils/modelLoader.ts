import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// Replace these URLs with your actual hosted model URLs
const MODEL_BASE_URL = '/';

export const useHogwarts = () => {
  try {
    return {
      scene: useLoader(
        GLTFLoader,
        `${MODEL_BASE_URL}/hogwarts/scene.gltf`
      ).scene
    };
  } catch (error) {
    console.warn('Failed to load Hogwarts model, using fallback');
    return null;
  }
};

export const useBroomstick = () => {
  try {
    return {
      scene: useLoader(
        GLTFLoader,
        `${MODEL_BASE_URL}/nimbus2000/scene.gltf`
      ).scene
    };
  } catch (error) {
    console.warn('Failed to load broomstick model, using fallback');
    return null;
  }
};

export const useCharacter = () => {
  try {
    return {
      scene: useLoader(
        GLTFLoader,
        `${MODEL_BASE_URL}/wizard/scene.gltf`
      ).scene
    };
  } catch (error) {
    console.warn('Failed to load character model, using fallback');
    return null;
  }
};

export const useTree = () => {
  try {
    return {
      scene: useLoader(
        GLTFLoader,
        `${MODEL_BASE_URL}/forbidden-forest-tree/scene.gltf`
      ).scene
    };
  } catch (error) {
    console.warn('Failed to load tree model, using fallback');
    return null;
  }
};

export const useRock = () => {
  try {
    return {
      scene: useLoader(
        GLTFLoader,
        `${MODEL_BASE_URL}/rock/scene.gltf`
      ).scene
    };
  } catch (error) {
    console.warn('Failed to load rock model, using fallback');
    return null;
  }
};