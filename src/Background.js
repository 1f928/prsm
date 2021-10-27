import React, { useEffect, useRef } from 'react';

const randRange = (max) => {
  return Math.floor(Math.random() * max);
};

const drawStar = (context, width, height) => {
  const starColor = '#fff5';
  const starSize =  1;
  const x = randRange(width);
  const y = randRange(height);

  context.fillStyle = starColor;
  context.beginPath();
  context.arc(x, y, starSize, 0, 2 * Math.PI);
  context.fill();
};

function Background(props) {

  const ref = useRef(null);
  
  useEffect(() => {
    const canvas = ref.current;
    const context = canvas.getContext('2d');
    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    context.fillStyle='#7c7cd9';
    context.fillRect(0,0,canvas.width,canvas.height);
    Array.from({length: 1000}).forEach(_ => drawStar(context, width, height));
  }, [ref]);

  return (
    <canvas className="background" ref={ref} />
  )
}

export default Background;