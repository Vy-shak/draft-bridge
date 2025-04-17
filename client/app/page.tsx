"use client"
import { MouseEvent,useRef } from "react";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const handleClick = (e:MouseEvent<HTMLDivElement>)=>{
    if (canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const xPercent = (x/rect.width)*100
      const yPercent = (y/rect.height)*100
      
      console.log("Canvas coordinates:", x, y);
      console.log("Canvas percentage", xPercent, yPercent);
    }
  }
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div onClick={(e)=>handleClick(e)} className="w-3xl">
      <canvas ref={canvasRef} className="w-full bg-amber-400">

      </canvas>
      </div>
    </div>
  );
}
