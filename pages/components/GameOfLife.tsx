
import React, { FunctionComponent, useEffect } from 'react';


function gameOfLife(canvas: HTMLCanvasElement) {
  if (typeof window === undefined) return;

  let height: number;
  let width: number;

  const ctx = canvas.getContext('2d')!;

  const resize = () => {
    height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    width = window.innerWidth;
    // modifying the canvas size will also clear it
    canvas.height = height;
    canvas.width = width;
  };
  resize(); // immediately set the canvas size

  const drawGrid = () => {
    ctx.clearRect(0, 0, width, height);
    let cellsByLine = 20;
    if (width > 640) cellsByLine = 40;
    if (width > 768) cellsByLine = 50;
    if (width > 1024) cellsByLine = 60;
    const gap = 2;
    const cellSize = (width / cellsByLine) - gap;
    const lineCount = Math.ceil(height / (cellSize + gap));

    for (let line = 0 ; line < lineCount ; line++) {
      const y = (cellSize + gap) * line;
      for (let col = 0 ; col < cellsByLine ; col++) {
        const x = (cellSize + gap) * col;

        const n = Math.random();
        if (n > 0.5) {
          if (n > 0.98) ctx.fillStyle = '#fde04715';
          else ctx.fillStyle = '#47556922';
          ctx.fillRect(x, y, cellSize, cellSize);
        }
      }
    }
  };
  drawGrid();

  return {
    onResize: () => {
      resize();
      drawGrid();
    }
  };
}


interface GameOfLifeProps {};

const GameOfLife: FunctionComponent<GameOfLifeProps> = props => {

  useEffect(() => {
    const c = document.getElementById('gol-canvas') as HTMLCanvasElement;
    const g = gameOfLife(c);

    window.addEventListener('resize', g!.onResize);

    return () => {
      window.removeEventListener('resize', g!.onResize);
    };
  }, []);

  return(
    <canvas id="gol-canvas" className="absolute inset-0 w-full h-full" />
  );
};


export default GameOfLife;