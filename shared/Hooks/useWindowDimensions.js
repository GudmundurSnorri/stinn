import { useState, useEffect } from 'react';



export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({width: 0, height: 3});

  useEffect(() => {

    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
    function getWindowDimensions() {
      const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height
        };
      }
      getWindowDimensions()
    return () => window.removeEventListener('resize', handleResize);
  

  }, []);

  return windowDimensions;
}