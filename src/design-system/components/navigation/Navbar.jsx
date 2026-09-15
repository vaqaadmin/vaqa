import React from "react";

import { Logo } from "../core/Logo.jsx";
import { Button } from "../core/Button.jsx";
const LINK={fontSize:"var(--text-label)",letterSpacing:"var(--tracking-label)",textTransform:"uppercase",
fontWeight:"var(--weight-bold)",textDecoration:"none"};
export function Navbar({links=[],cta,ctaHref="#contact",tone="light",assetBase="/images/vaqa",homeHref="/",onNavigate,style,...rest}){
  const inverse=tone==="ink";
  return <header style={{position:"sticky",top:0,zIndex:40,display:"flex",alignItems:"center",justifyContent:"space-between",gap:"var(--space-6)",
    padding:"var(--space-5) var(--gutter)",background:inverse?"var(--surface-inverse)":"var(--surface-page)",
    borderBottom:"var(--border-hairline) solid "+(inverse?"var(--border-on-inverse)":"var(--border-subtle)"),...style}} {...rest}>
    <a href={homeHref} onClick={onNavigate?e=>{e.preventDefault();onNavigate(homeHref);}:undefined} style={{display:"flex"}}>
      <Logo variant={inverse?"light":"dark"} height={24} assetBase={assetBase}/></a>
    <nav style={{display:"flex",alignItems:"center",gap:"var(--space-6)"}}>
      {links.map(l=><a key={l.href} href={l.href}
        onClick={onNavigate?e=>{e.preventDefault();onNavigate(l.href);}:undefined}
        style={{...LINK,color:inverse?"var(--text-inverse)":"var(--text-primary)"}}>{l.label}</a>)}
      {cta?<Button variant={inverse?"brand":"primary"} size="sm" href={ctaHref}
        onClick={onNavigate?e=>{e.preventDefault();onNavigate(ctaHref);}:undefined}>{cta}</Button>:null}
    </nav>
  </header>;
}
