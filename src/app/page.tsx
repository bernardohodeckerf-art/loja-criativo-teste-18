"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Check, ChevronUp, MapPin, Maximize2, Menu, Pause, Play, X } from "lucide-react";
import { MotionProvider, useSiteMotion } from "@/components/motion-provider";
import { CinematicHero } from "@/components/ui/cinematic-landing-hero";
import SocialCards from "@/components/ui/card-fan-carousel";
import { Questionnaire } from "@/components/questionnaire";
import { categories, products, type Product } from "@/data/catalog";
import credits from "../../public/products/credits.json";
import { company } from "./company";

gsap.registerPlugin(ScrollTrigger);
const brands=[{name:'Rometal',image:'/brands/rometal.svg',className:'rometal'},{name:'Alternativa',image:'',className:'alternativa'},{name:'FGV',image:'/brands/fgv.png',className:'fgv'},{name:'Soprano',image:'/brands/soprano.svg',className:'soprano'},{name:'Lumitek',image:'/brands/lumitek.jpg',className:'lumitek'},{name:'Vonder',image:'/brands/vonder.webp',className:'vonder'}];
export default function Home(){return <MotionProvider><Storefront/></MotionProvider>;}
function Storefront(){
 const {enabled,toggle}=useSiteMotion();
 const [category,setCategory]=useState('Todos'),[selection,setSelection]=useState<string[]>([]),[viewing,setViewing]=useState<Product|null>(null),[menu,setMenu]=useState(false);
 const dialog=useRef<HTMLDialogElement>(null),root=useRef<HTMLDivElement>(null),lastTrigger=useRef<HTMLElement|null>(null);
 useEffect(()=>{
  if(!enabled)return;
  const lenis=new Lenis({autoRaf:true,anchors:true});lenis.on('scroll',ScrollTrigger.update);
  const ctx=gsap.context(()=>{gsap.utils.toArray<HTMLElement>('.reveal').forEach(el=>{gsap.from(el,{y:40,opacity:0,duration:.8,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 93%',once:true},clearProps:'all'});});},root);
  return ()=>{lenis.destroy();ctx.revert();};
 },[enabled]);
 useEffect(()=>{if(viewing)dialog.current?.showModal();},[viewing]);
 function choose(name:string){setSelection(s=>s.includes(name)?s:[...s,name]);document.querySelector('#questionario')?.scrollIntoView({behavior:enabled?'smooth':'instant'});}
 function closeImage(){dialog.current?.close();setViewing(null);lastTrigger.current?.focus({preventScroll:true});}
 const credit=credits.find(c=>c.id===viewing?.id);
 return <div ref={root}><a className="skip-link" href="#produtos">Ir para os produtos</a>
 <header><a className="wordmark" href="#inicio" aria-label="LJB, início">LJB<span>COMPENSADOS & FERRAGENS</span></a><nav aria-label="Principal" className={menu?'nav-open':''}><a href="#produtos" onClick={()=>setMenu(false)}>Produtos</a><a href="#marcas" onClick={()=>setMenu(false)}>Marcas</a><a href="#questionario" onClick={()=>setMenu(false)}>Meu projeto</a><a className="button small" href="#contato" onClick={()=>setMenu(false)}>Vamos conversar <ArrowUpRight size={16}/></a></nav><div className="header-controls"><button className="motion-toggle" onClick={toggle} aria-label={enabled?'Pausar animações':'Ativar animações'} title={enabled?'Pausar animações':'Ativar animações'}>{enabled?<Pause size={17}/>:<Play size={17}/>}</button><button className="menu-toggle" onClick={()=>setMenu(!menu)} aria-expanded={menu} aria-label={menu?'Fechar menu':'Abrir menu'}>{menu?<X/>:<Menu/>}</button></div></header>
 <main><CinematicHero/>
 <div className="strip"><span>Experiência que faz a diferença.</span><span>Madeiras e revestimentos</span><span>Ferragens e acessórios</span><span>Perfis e iluminação</span></div>
 <section id="inspiracao" className="inspiration section"><div className="section-heading reveal"><div><p className="eyebrow">UM UNIVERSO DE POSSIBILIDADES</p><h2>Pequenos detalhes.<br/><em>Grandes transformações.</em></h2></div><p>Explore materiais, ferragens e acabamentos para a próxima ideia que você vai tirar do papel.</p></div><SocialCards cards={products.map(p=>({imgUrl:`/products/${p.id}.webp`,alt:p.name,linkUrl:'#produtos'}))}/><p className="caption">Fotografias ilustrativas. Modelos e disponibilidade devem ser consultados com a loja.</p></section>
 <section id="produtos" className="section catalog"><div className="section-heading reveal"><div><p className="eyebrow">DO PRIMEIRO CORTE AO ÚLTIMO DETALHE</p><h2>Seu projeto começa<br/><em>com a escolha certa.</em></h2></div><p>Escolha os itens que procura e monte uma lista para conversar com a nossa equipe.</p></div>
 <div className="filters" aria-label="Filtrar produtos">{categories.map(c=><button key={c} aria-pressed={category===c} onClick={()=>setCategory(c)}>{c}</button>)}</div><p className="results-count" aria-live="polite">{products.filter(p=>category==='Todos'||categories[p.category]===category).length} produtos · Fotos ilustrativas</p>
 <div className="grid">{products.filter(p=>category==='Todos'||categories[p.category]===category).map(p=><article className="card" key={p.id} onPointerMove={e=>{if(!enabled||e.pointerType==='touch')return;const r=e.currentTarget.getBoundingClientRect();gsap.to(e.currentTarget,{rotateY:(e.clientX-r.left-r.width/2)/45,rotateX:-(e.clientY-r.top-r.height/2)/65,transformPerspective:1000,duration:.4});}} onPointerLeave={e=>gsap.to(e.currentTarget,{rotateY:0,rotateX:0,duration:.6})}>
 <button className="product-image" aria-label={`Ampliar foto de ${p.name}`} onClick={e=>{lastTrigger.current=e.currentTarget;setViewing(p);}}><Image src={`/products/${p.id}.webp`} alt={p.imageNote||`Fotografia ilustrativa de ${p.name.toLowerCase()}`} fill sizes="(max-width: 600px) 90vw, (max-width: 1000px) 45vw, 30vw"/><span className="image-expand"><Maximize2 size={16}/></span><span className="image-label">ILUSTRATIVA</span></button>
 <div className="card-body"><p className="eyebrow">{categories[p.category]}</p><h3>{p.name}</h3><p>{p.description}</p><button className="consult" onClick={()=>choose(p.name)}>{selection.includes(p.name)?<><span>Na minha lista</span><Check size={17}/></>:<><span>Consultar este produto</span><ArrowUpRight size={17}/></>}</button></div></article>)}</div><p className="caption photo-notice">Imagens de referência, sem indicação de modelo ou estoque. <a href="/creditos" target="_blank" rel="noreferrer">Autores, fontes e licenças das fotos ↗</a></p></section>
 <Questionnaire selected={selection} onChange={setSelection}/>
 <section id="marcas" className="brands section"><div className="reveal"><p className="eyebrow">MARCAS COM QUE TRABALHAMOS</p><h2>MARCAS QUE FAZEM PARTE<br/><em>DOS SEUS PROJETOS.</em></h2></div><div className="brand-grid">{brands.map(b=><div className={`brand-tile ${b.className}`} key={b.name}>{b.image?<Image src={b.image} alt={b.name} width={220} height={90}/>:<span>{b.name}<small>MARCA DO NOSSO CATÁLOGO</small></span>}</div>)}</div><p className="authorized">Revendedor autorizado <strong>{company.authorizedBrand}</strong></p></section>
 <section id="sobre" className="about section"><div className="reveal"><p className="eyebrow">A LJB</p><h2>Por trás de cada móvel,<br/><em>uma boa escolha.</em></h2><p>Há mais de 24 anos no ramo moveleiro de Blumenau e região.</p><p>{company.name}.</p></div><div className="experience-card" aria-label="Mais de 24 anos no ramo moveleiro"><span>24<span>+</span></span><p>ANOS CONSTRUINDO<br/>POSSIBILIDADES.</p></div></section>
 <section id="contato" className="contact section"><div className="reveal"><p className="eyebrow">VAMOS TIRAR SUA IDEIA DO PAPEL?</p><h2>Seu próximo projeto.<br/><em>Começa aqui.</em></h2></div><div className="contact-card"><MapPin size={28}/><address>Rua Francisco Vahldieck, 3814<br/>Fortaleza Alta — Blumenau/SC.</address><p>Visite nossa loja para consultar produtos e solicitar seu orçamento.</p><a className="text-link" href="https://www.google.com/maps/search/?api=1&query=Rua+Francisco+Vahldieck+3814+Blumenau+SC" target="_blank" rel="noreferrer">Como chegar <ArrowUpRight size={17}/></a></div></section></main>
 <footer><a className="wordmark" href="#inicio">LJB</a><p>Compensados, Ferragens e Acessórios para Móveis.</p><a href="#inicio">Voltar ao topo <ChevronUp size={15}/></a></footer>
 <dialog ref={dialog} className="image-dialog" data-lenis-prevent onCancel={e=>{e.preventDefault();closeImage();}} onClose={()=>{setViewing(null);lastTrigger.current?.focus({preventScroll:true});}}><button className="close" aria-label="Fechar imagem" onClick={closeImage}><X/></button>{viewing&&<><h2>{viewing.name}</h2><div className="lightbox-image"><Image src={`/products/${viewing.id}.webp`} alt={viewing.imageNote||`Fotografia ilustrativa de ${viewing.name.toLowerCase()}`} fill sizes="90vw"/></div><p>{viewing.imageNote||'Fotografia ilustrativa. Consulte modelos, especificações e disponibilidade com a loja.'}</p>{credit&&<p className="image-credit">Foto: {credit.author} · <a href={credit.source} target="_blank" rel="noreferrer">Fonte original</a> · <a href={credit.license_url||credit.source} target="_blank" rel="noreferrer">{credit.license}</a>. Redimensionada e convertida para WebP.</p>}<button className="button" onClick={()=>{closeImage();choose(viewing.name);}}>Adicionar ao meu projeto <ArrowUpRight size={16}/></button></>}</dialog>
 </div>;
}
