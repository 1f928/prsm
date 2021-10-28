import React, { useEffect, useRef } from 'react';

const randRange = (max) => {
  return Math.floor(Math.random() * max);
};

const drawStar = (context, width, height, color, starSizeMultiplier) => {
  const starSize = 1 * starSizeMultiplier;
  const x = randRange(width);
  const y = randRange(height);

  context.fillStyle = color;
  context.beginPath();
  context.arc(x, y, starSize + Math.random(), 0, 2 * Math.PI);
  context.fill();
};

function Background({theme, width, height}) {

  const ref = useRef(null);
  
  useEffect(() => {
    const pixelRatio = window.devicePixelRatio;
    const canvasWidth = width * pixelRatio;
    const canvasHeight = height * pixelRatio;
    const canvas = ref.current;
    const context = canvas.getContext('2d');
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    const starCount = Math.floor((width * height) / 5000);
    const fgColor = (theme === "light") ? '--fg-hover-color' : "--focus-fg-color"

    const bgColor = getComputedStyle(document.getElementById("root")).getPropertyValue("--primary-bg-color");
    const starColor = getComputedStyle(document.getElementById("root")).getPropertyValue(fgColor) + "99";
    context.fillStyle = bgColor;
    context.fillRect(0,0,canvas.width,canvas.height);
    Array.from({length: starCount}).forEach(_ => drawStar(context, canvasWidth, canvasHeight, starColor, pixelRatio));
  }, [ref, theme, width, height]);

  return (
    <canvas className="background" ref={ref} />
  )
}

export default Background;