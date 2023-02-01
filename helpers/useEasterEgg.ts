import { useEffect } from 'react';

const COMPUTER = `
 ______________
||            ||
||            ||
||     HI     ||
||            ||
||____________||
|______________|
 \\\\############\\\\
  \\\\############\\\\
   \\      ____    \\   
    \\_____\\___\\____\\


`;

export const easterEgg = () => console.log(COMPUTER);

/**
 * Custom hook to render an easter egg on the console on load
 */
export const useEasterEgg = () => {
  useEffect(() => {
    const onLoad = () => easterEgg();
    window.addEventListener('load', onLoad);
    return () => window.removeEventListener('load', onLoad);
  }, []);
};
