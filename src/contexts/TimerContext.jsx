"use client";

import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const TimerContext = createContext();

export function TimerProvider({ children }) {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0); // in seconds
  const [totalTime, setTotalTime] = useState(0);
  const [currentTask, setCurrentTask] = useState('');

  useEffect(() => {
    let interval = null;

    if (isActive && !isPaused && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    } else if (timeRemaining === 0 && isActive) {
      setIsActive(false);
      setIsPaused(false);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, isPaused, timeRemaining]);

  const startTimer = useCallback((taskName, minutes) => {
    const seconds = minutes * 60;
    setCurrentTask(taskName);
    setTimeRemaining(seconds);
    setTotalTime(seconds);
    setIsActive(true);
    setIsPaused(false);
  }, []);

  const pauseTimer = useCallback(() => {
    setIsPaused(true);
  }, []);

  const resumeTimer = useCallback(() => {
    setIsPaused(false);
  }, []);

  const completeTimer = useCallback(() => {
    setIsActive(false);
    setIsPaused(false);
    setTimeRemaining(0);
    setTotalTime(0);
    setCurrentTask('');
  }, []);

  const formatTime = useCallback((seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }, []);

  const progress = totalTime > 0 ? ((totalTime - timeRemaining) / totalTime) * 100 : 0;

  return (
    <TimerContext.Provider
      value={{
        isActive,
        isPaused,
        timeRemaining,
        currentTask,
        progress,
        formatTime,
        startTimer,
        pauseTimer,
        resumeTimer,
        completeTimer,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
}

export function useTimer() {
  const context = useContext(TimerContext);
  if (!context) {
    throw new Error('useTimer must be used within a TimerProvider');
  }
  return context;
}
