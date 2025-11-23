import React, { useRef, useState, useEffect } from 'react';
import { Volume2, Play, Pause } from 'lucide-react';

interface AudioPlayerProps {
  src?: string;
  script?: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ src, script }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Stop audio/speech when component unmounts or props change
    return () => {
      if (audioRef.current) audioRef.current.pause();
      window.speechSynthesis.cancel();
    };
  }, [src, script]);

  const togglePlay = () => {
    if (script) {
      if (isPlaying) {
        window.speechSynthesis.cancel();
        setIsPlaying(false);
      } else {
        window.speechSynthesis.cancel(); // Safety clear
        const utterance = new SpeechSynthesisUtterance(script);
        utterance.lang = 'en-US'; // Set English US accent
        utterance.rate = 0.8; // Slightly slower for easier listening
        utterance.onend = () => setIsPlaying(false);
        utterance.onerror = () => setIsPlaying(false);
        window.speechSynthesis.speak(utterance);
        setIsPlaying(true);
      }
    } else if (src && audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  if (!src && !script) return null;

  return (
    <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow w-full max-w-md">
      <button 
        type="button" 
        onClick={togglePlay}
        className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-blue-200"
        aria-label={isPlaying ? "Dừng" : "Phát"}
      >
        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-1" />}
      </button>
      <div className="flex flex-col">
        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-0.5">Câu hỏi Audio</span>
        <span className="text-sm text-slate-500 flex items-center gap-1">
          <Volume2 className="w-4 h-4" /> {script ? "Nghe đọc (AI)" : "Nhấn để nghe"}
        </span>
      </div>
      {src && !script && (
        <audio 
          ref={audioRef} 
          src={src} 
          onEnded={handleEnded} 
          className="hidden" 
        />
      )}
    </div>
  );
};