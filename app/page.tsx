"use client";

import { fabric } from "fabric";

import LeftSideBar from "@/components/LeftSideBar";
import Live from "@/components/Live";
import Navbar from "@/components/Navbar";
import RightSideBar from "@/components/RightSideBar";
import { useRef } from "react";

export default function Page() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricRef = useRef<fabric.Canvas | null>(null);

  return (
    <main className="h-screen overflow-hidden">
      <Navbar />

      <section className="flex h-full flew-row">
        <LeftSideBar />
        <Live />
        <RightSideBar />
      </section>
      <Live />
    </main>
  );
}
