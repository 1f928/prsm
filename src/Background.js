import React, { useEffect, useRef } from 'react';

const randRange = (max) => {
  return Math.floor(Math.random() * max);
};

const drawStar = (context, width, height, color) => {
  const starSize =  1;
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
    const canvas = ref.current;
    const context = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;
    const starCount = Math.floor((width * height) / 5000);
    const fgColor = (theme === "light") ? '--fg-hover-color' : "--focus-fg-color"

    const bgColor = getComputedStyle(document.getElementById("root")).getPropertyValue("--primary-bg-color");
    const starColor = getComputedStyle(document.getElementById("root")).getPropertyValue(fgColor) + "99";
    context.fillStyle = bgColor;
    context.fillRect(0,0,canvas.width,canvas.height);
    Array.from({length: starCount}).forEach(_ => drawStar(context, width, height, starColor));
  }, [ref, theme, width, height]);

  return (
    <canvas className="background" ref={ref} />
  )
}

export default Background;