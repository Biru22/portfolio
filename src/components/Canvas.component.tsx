"use client";

import React, { useState } from "react";
import styles from "../styles/canvas.module.scss";
import { useDraw } from "../hooks/useDraw";
import { SliderPicker } from "react-color";
import Image from "next/image";
import reset from "../assets/reset.svg";

const CanvasComponent = () => {
  const [color, setColor] = useState<string>("#000");

  interface Draw {
    ctx: CanvasRenderingContext2D;
    currentPoint: Point;
    prevPoint: Point | null;
  }

  interface Point {
    x: number;
    y: number;
  }

  const { canvasRef, onMouseDown, clear } = useDraw(drawLine);

  function drawLine({ prevPoint, currentPoint, ctx }: Draw) {
    const { x: currX, y: currY } = currentPoint;
    const lineColor = color;
    const lineWidth = 4;

    let startPoint = prevPoint ?? currentPoint;
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = lineColor;
    ctx.moveTo(startPoint.x, startPoint.y);
    ctx.lineTo(currX, currY);
    ctx.stroke();

    ctx.fillStyle = lineColor;
    ctx.beginPath();
    ctx.arc(startPoint.x, startPoint.y, 2, 0, 2 * Math.PI);
    ctx.fill();
  }

  return (
    <div className={styles.div}>
      <SliderPicker
        color={color}
        onChange={(e) => setColor(e.hex)}
        className={styles.color}
      />
      <button type="button" onClick={clear} className={styles.clear}>
        <Image src={reset} alt="Reset" className={styles.reset} />
      </button>
      <canvas
        ref={canvasRef}
        onMouseDown={onMouseDown}
        className={styles.canvas}
      />
    </div>
  );
};

export default CanvasComponent;
