"use client";
import { createContext, useContext, useState, useSyncExternalStore } from "react";
const MotionContext = createContext({ enabled: false, toggle: () => {} });
function subscribe(callback: () => void) { const m = window.matchMedia('(prefers-reduced-motion: reduce)'); m.addEventListener('change', callback); return () => m.removeEventListener('change', callback); }
export function MotionProvider({ children }: { children: React.ReactNode }) {
 const reduce = useSyncExternalStore(subscribe, () => window.matchMedia('(prefers-reduced-motion: reduce)').matches, () => true);
 const [paused, setPaused] = useState(false);
 const enabled = !reduce && !paused;
 return <MotionContext.Provider value={{enabled,toggle:()=>setPaused(p=>!p)}}><div data-motion={enabled ? 'on' : 'off'}>{children}</div></MotionContext.Provider>;
}
export const useSiteMotion = () => useContext(MotionContext);
