"use client";

import { useState } from 'react';
import { useTimer } from '../../contexts/TimerContext';

export default function ProductTimerDemo() {
  const [taskInput, setTaskInput] = useState('Finish product mockups');
  const [minutesInput, setMinutesInput] = useState(25);
  const { startTimer } = useTimer();

  const handleStartTimer = () => {
    if (taskInput.trim() && minutesInput > 0 && minutesInput <= 60) {
      startTimer(taskInput, minutesInput);
    }
  };

  return (
    <div className="bg-gradient-to-br from-[rgba(79,209,197,0.15)] to-[rgba(99,102,241,0.15)] border-2 border-[rgba(79,209,197,0.3)] p-12 rounded-2xl mt-10">
      <div className="flex items-center gap-4 mb-9 pb-5 border-b border-[rgba(79,209,197,0.2)]">
        <div className="text-3xl">⏱️</div>
        <div className="text-2xl text-[#4fd1c5] font-semibold">Start Focus Session</div>
      </div>

      <div className="bg-[rgba(0,0,0,0.3)] p-8 rounded-xl">
        <div className="mb-6">
          <label className="text-[#94a3b8] text-sm mb-2 uppercase tracking-wider block">Task Name</label>
          <input
            type="text"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            className="w-full bg-[rgba(255,255,255,0.1)] border border-[rgba(79,209,197,0.3)] text-white text-lg px-4 py-3 rounded-lg focus:outline-none focus:border-[#4fd1c5] transition-colors"
            placeholder="What are you working on?"
          />
        </div>

        <div className="mb-6">
          <label className="text-[#94a3b8] text-sm mb-2 uppercase tracking-wider block">Duration (minutes)</label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min="5"
              max="60"
              step="5"
              value={minutesInput}
              onChange={(e) => setMinutesInput(Number(e.target.value))}
              className="flex-1 h-2 bg-[rgba(255,255,255,0.1)] rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#4fd1c5] [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#4fd1c5] [&::-moz-range-thumb]:border-0"
            />
            <div className="text-[#4fd1c5] text-2xl font-bold font-mono w-20 text-right">{minutesInput}:00</div>
          </div>
          <div className="flex justify-between text-[#94a3b8] text-xs mt-2">
            <span>5 min</span>
            <span>60 min</span>
          </div>
        </div>

        <button
          onClick={handleStartTimer}
          className="w-full py-4 border-2 border-[rgba(79,209,197,0.3)] bg-[rgba(79,209,197,0.2)] text-[#4fd1c5] text-base font-semibold rounded-lg cursor-pointer transition-all duration-300 hover:bg-[rgba(79,209,197,0.3)] hover:border-[rgba(79,209,197,0.5)] hover:scale-[1.02]"
        >
          Start Focus Session
        </button>

        <p className="text-[#94a3b8] text-sm mt-4 text-center">
          Your timer will appear in the bottom right corner and stay visible across all pages
        </p>
      </div>
    </div>
  );
}
