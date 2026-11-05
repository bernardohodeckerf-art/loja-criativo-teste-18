"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useSyncExternalStore } from "react";
import { useSiteMotion } from "./motion-provider";
import { Pause, Play } from "lucide-react";

const query = "(prefers-reduced-motion: no-preference)";
function subscribe(callback: () => void) {
  const media = window.matchMedia(query);
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}
function snapshot() { return window.matchMedia(query).matches; }
function serverSnapshot() { return false; }
function subscribeWidth(callback: () => void) {
 const media=window.matchMedia('(max-width: 767px)');
 media.addEventListener('change',callback);
 return ()=>media.removeEventListener('change',callback);
}
function mobileSnapshot(){return window.matchMedia('(max-width: 767px)').matches;}

export function HeroVideo() {
  const mobile = useSyncExternalStore(subscribeWidth, mobileSnapshot, serverSnapshot);
  const canPlay = useSyncExternalStore(subscribe, snapshot, serverSnapshot);
  const { enabled } = useSiteMotion();
  const eligible = canPlay && enabled;
  const [failed, setFailed] = useState(false);
  const [paused, setPaused] = useState(false);
  const video = useRef<HTMLVideoElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  async function togglePlayback() {
    if (!video.current) return;
    if (video.current.paused) {
      try { await video.current.play(); } catch { setFailed(true); }
    } else { video.current.pause(); }
  }

  return <div ref={container} className="hero-media">
    <motion.div className="hero-media-frame" style={{ scale: eligible && !mobile ? scale : 1 }}>
      <Image src="/media/woodworking-poster.webp" alt="" fill priority sizes="100vw" className="hero-poster" />
      {eligible && !failed && <video ref={video} className="hero-film" width={3840} height={2160}
        src={mobile ? "/media/woodworking-mobile.mp4" : "/media/woodworking-4k.mp4"}
        autoPlay muted loop playsInline preload="none" poster="/media/woodworking-poster.webp"
        aria-hidden="true" tabIndex={-1}
        onCanPlay={() => { video.current?.play().catch(() => setFailed(true)); }}
        onError={() => setFailed(true)} onPause={() => setPaused(true)} onPlay={() => setPaused(false)}>

      </video>}
    </motion.div>
    <div className="hero-shade" aria-hidden="true" />
    {eligible && !failed && <button type="button" className="video-control" onClick={togglePlayback}
      aria-label={paused ? "Reproduzir vídeo de fundo" : "Pausar vídeo de fundo"}>
      {paused ? <><Play size={14}/> Reproduzir vídeo</> : <><Pause size={14}/> Pausar vídeo</>}
    </button>}
  </div>;
}
