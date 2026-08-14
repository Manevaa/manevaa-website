import { useEffect, useState } from 'react';

// Central launch date — change this single value to update the whole site.
export const LAUNCH_DATE = new Date('2026-08-21T00:00:00');

function getTimeLeft() {
  const now = new Date();
  const diff = LAUNCH_DATE.getTime() - now.getTime();
  const isLive = diff <= 0;

  if (isLive) {
    return { isLive: true, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { isLive: false, days, hours, minutes, seconds };
}

export function useCountdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return timeLeft;
}

export function useIsLaunched() {
  const { isLive } = useCountdown();
  return isLive;
}
