import React from "react";

import { Logo } from "../core/Logo.jsx";
import { Button } from "../core/Button.jsx";
const LINK={fontSize:"var(--text-label)",letterSpacing:"var(--tracking-label)",textTransform:"uppercase",
fontWeight:"var(--weight-bold)",textDecoration:"none"};
export function Navbar({links=[],cta,ctaHref="#contact",tone="light",assetBase="/images/vaqa",homeHref="/",onNavigate,style,...rest}){
  const inverse=tone==="ink";
  const [open,setOpen]=React.useState(false);
  const linkColor=inverse?"var(--text-inverse)":"var(--text-primary)";
  const borderColor=inverse?"var(--border-on-inverse)":"var(--border-subtle)";
  const go=(href)=>(e)=>{
    setOpen(false);
    if(onNavigate){e.preventDefault();onNavigate(href);}
  };
  return <header style={{position:"sticky",top:0,zIndex:40,
    background:inverse?"var(--surface-inverse)":"var(--surface-page)",
    borderBottom:"var(--border-hairline) solid "+borderColor,...style}} {...rest}>
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"var(--space-6)",
      padding:"var(--space-5) var(--gutter)"}}>
      <a href={homeHref} onClick={go(homeHref)} style={{display:"flex"}}>
        <Logo variant={inverse?"light":"dark"} height={24} assetBase={assetBase}/></a>
      <nav className="hidden md:flex" style={{alignItems:"center",gap:"var(--space-6)"}}>
        {links.map(l=><a key={l.href} href={l.href} onClick={go(l.href)}
          style={{...LINK,color:linkColor}}>{l.label}</a>)}
        {cta?<Button variant={inverse?"brand":"primary"} size="sm" href={ctaHref}
          onClick={go(ctaHref)}>{cta}</Button>:null}
      </nav>
      <button type="button" className="md:hidden" aria-expanded={open} aria-label="Toggle menu"
        onClick={()=>setOpen((o)=>!o)}
        style={{...LINK,color:linkColor,background:"none",border:0,padding:0,cursor:"pointer"}}>
        {open?"Close":"Menu"}
      </button>
    </div>
    {open?<nav className="md:hidden" style={{display:"flex",flexDirection:"column",gap:"var(--space-5)",
      padding:"var(--space-1) var(--gutter) var(--space-6)",
      borderTop:"var(--border-hairline) solid "+borderColor}}>
      {links.map(l=><a key={l.href} href={l.href} onClick={go(l.href)}
        style={{...LINK,color:linkColor,paddingTop:"var(--space-4)"}}>{l.label}</a>)}
      {cta?<Button variant={inverse?"brand":"primary"} size="sm" href={ctaHref} onClick={go(ctaHref)}
        style={{alignSelf:"flex-start",marginTop:"var(--space-2)"}}>{cta}</Button>:null}
    </nav>:null}
  </header>;
}
