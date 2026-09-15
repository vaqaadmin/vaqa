import React from "react";

export function Testimonial({quote,name,role,clientLogo,clientName="",href,style,...rest}){
  return <blockquote style={{margin:0,display:"flex",flexDirection:"column",gap:"var(--space-5)",
    background:"var(--surface-muted)",borderRadius:"var(--radius-lg)",padding:"var(--space-7)",...style}} {...rest}>
    {clientLogo?(href?<a href={href}><img src={clientLogo} alt={clientName} style={{height:36,width:"auto",objectFit:"contain"}}/></a>
      :<img src={clientLogo} alt={clientName} style={{height:36,width:"auto",objectFit:"contain"}}/>):null}
    <p style={{margin:0,fontSize:"var(--text-body-lg)",fontWeight:"var(--weight-light)",
      lineHeight:"var(--leading-loose)",color:"var(--text-primary)"}}>{quote}</p>
    <footer style={{display:"flex",flexDirection:"column",gap:2}}>
      <span style={{fontWeight:"var(--weight-bold)"}}>{name}</span>
      <span style={{fontSize:"var(--text-body-sm)",color:"var(--text-secondary)"}}>{role}</span>
    </footer>
  </blockquote>;
}
