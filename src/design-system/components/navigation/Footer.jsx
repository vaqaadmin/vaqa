import React from "react";

import { Logo } from "../core/Logo.jsx";
export function Footer({links=[],copyright="© 2025 Vaqa. All rights reserved.",assetBase="/images/vaqa",style,...rest}){
  return <footer style={{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",
    gap:"var(--space-5)",padding:"var(--space-8) var(--gutter)",background:"var(--surface-inverse)",
    color:"var(--text-inverse)",...style}} {...rest}>
    <Logo variant="light" height={22} assetBase={assetBase}/>
    <span style={{fontSize:"var(--text-body-sm)",color:"rgba(255,255,255,.7)"}}>{copyright}</span>
    <nav style={{display:"flex",gap:"var(--space-5)"}}>
      {links.map(l=><a key={l.href} href={l.href} style={{fontSize:"var(--text-label)",
        letterSpacing:"var(--tracking-label)",textTransform:"uppercase",fontWeight:"var(--weight-bold)",
        color:"var(--text-inverse)",textDecoration:"none"}}>{l.label}</a>)}
    </nav>
  </footer>;
}
