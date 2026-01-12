"use client";

import { useTimer } from '../contexts/TimerContext';
import { X, Play, Pause } from 'lucide-react';

export default function FloatingTimer() {
  const { isActive, isPaused, timeRemaining, currentTask, progress, formatTime, pauseTimer, resumeTimer, completeTimer } = useTimer();

  if (!isActive) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] w-80 bg-gradient-to-br from-[rgba(79,209,197,0.95)] to-[rgba(99,102,241,0.95)] backdrop-blur-md border-2 border-[rgba(79,209,197,0.5)] rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] p-5">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="text-2xl">⏱️</div>
          <div className="text-white font-semibold text-sm">Active Focus Session</div>
        </div>
        <button
          onClick={completeTimer}
          className="text-white/80 hover:text-white transition-colors"
        >
          <X size={18} />
        </button>
      </div>

      <div className="bg-[rgba(0,0,0,0.3)] rounded-xl p-4">
        <div className="text-[#94a3b8] text-xs mb-1 uppercase tracking-wider">Current Task</div>
        <div className="text-white text-sm font-medium mb-3 truncate">{currentTask}</div>

        <div className="flex justify-between items-center mb-2">
          <div className="text-[#94a3b8] text-xs uppercase tracking-wider">Time Remaining</div>
          <div className="text-white text-2xl font-bold font-mono">{formatTime(timeRemaining)}</div>
        </div>

        <div className="w-full h-2 bg-[rgba(255,255,255,0.1)] rounded overflow-hidden mb-3">
          <div
            className="h-full bg-gradient-to-r from-[#4fd1c5] to-[#45b8ad] rounded transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="flex gap-2">
          {isPaused ? (
            <button
              onClick={resumeTimer}
              className="flex-1 py-2 bg-[rgba(79,209,197,0.2)] text-white text-sm font-semibold rounded-lg hover:bg-[rgba(79,209,197,0.3)] transition-all flex items-center justify-center gap-2"
            >
              <Play size={14} />
              Resume
            </button>
          ) : (
            <button
              onClick={pauseTimer}
              className="flex-1 py-2 bg-[rgba(79,209,197,0.2)] text-white text-sm font-semibold rounded-lg hover:bg-[rgba(79,209,197,0.3)] transition-all flex items-center justify-center gap-2"
            >
              <Pause size={14} />
              Pause
            </button>
          )}
          <button
            onClick={completeTimer}
            className="flex-1 py-2 bg-white/20 text-white text-sm font-semibold rounded-lg hover:bg-white/30 transition-all"
          >
            Complete
          </button>
        </div>
      </div>
    </div>
  );
}
