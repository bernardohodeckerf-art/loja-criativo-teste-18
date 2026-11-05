"use client";
// Adapted from the supplied CinematicHero: scoped GSAP reveals, physical layers,
// pointer lighting and responsive perspective; no scroll trapping or app mockup.
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowDown, ArrowUpRight, Layers3, MoveUpRight } from "lucide-react";
import { HeroVideo } from "@/components/hero-video";
import { useSiteMotion } from "@/components/motion-provider";

export function CinematicHero() {
 const root=useRef<HTMLElement>(null); const card=useRef<HTMLDivElement>(null);
 const {enabled}=useSiteMotion();
 useEffect(()=>{
  if(!enabled)return;
  const ctx=gsap.context(()=>{gsap.from('.hero-reveal',{y:32,opacity:0,rotateX:-12,duration:1,stagger:.12,ease:'power3.out',clearProps:'all'});},root);
  return ()=>ctx.revert();
 },[enabled]);
 return <section id="inicio" className="hero cinematic-hero" ref={root}>
  <HeroVideo/>
  <div className="hero-content"><p className="eyebrow hero-reveal"><span className="status-dot"/> BLUMENAU · SANTA CATARINA</p>
   <h1 className="hero-reveal">MADEIRA, FERRAGENS<br className="desktop-break"/> E SOLUÇÕES PARA<br className="desktop-break"/> <em>TIRAR PROJETOS</em><br className="desktop-break"/> DO PAPEL.</h1>
   <p className="intro hero-reveal">Há mais de 24 anos no ramo moveleiro de Blumenau e região.</p>
   <div className="actions hero-reveal"><a className="button" href="#produtos">Conhecer produtos <ArrowUpRight size={17}/></a><a className="text-link" href="#questionario">Montar meu projeto <MoveUpRight size={17}/></a></div>
  </div>
  <div className="hero-depth" aria-hidden="true" onPointerMove={e=>{if(!enabled||e.pointerType==='touch'||!card.current)return;const r=e.currentTarget.getBoundingClientRect();gsap.to(card.current,{rotateY:(e.clientX-r.left-r.width/2)/20,rotateX:-(e.clientY-r.top-r.height/2)/20,duration:.5});}} onPointerLeave={()=>{if(card.current)gsap.to(card.current,{rotateX:0,rotateY:0,duration:.6});}}>
   <div className="material-card" ref={card}><div className="material-layer layer-back"/><div className="material-layer layer-middle"/><div className="material-layer layer-front"><Layers3 size={42}/><span>DA SUA IDEIA<br/>AO ÚLTIMO DETALHE.</span></div><div className="floating-label">Madeira. Ferragens. Possibilidades.</div></div>
  </div>
  <a className="hero-scroll" href="#inspiracao"><ArrowDown size={15}/> EXPLORE AS POSSIBILIDADES</a>
 </section>;
}
