import { useEffect, useRef } from 'react';

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.loop = true;
    }
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/sounds/Voicy_Harry potter theme.mp3"
      autoPlay
      controls
      className="fixed bottom-4 right-4 z-50"
    />
  );
}