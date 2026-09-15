import React from "react";

import { Eyebrow } from "./Eyebrow.jsx";
export function SectionHeading({eyebrow,title,lede,align="left",tone="ink",level="h2",size="h2",style,...rest}){
  const Tag=level;
  const inverse=tone==="inverse";
  const sizes={display:"var(--text-display-2)",h1:"var(--text-h1)",h2:"var(--text-h2)",h3:"var(--text-h3)"};
  return <div style={{display:"flex",flexDirection:"column",gap:"var(--space-4)",textAlign:align,
    alignItems:align==="center"?"center":"flex-start",maxWidth:"var(--container-narrow)",...style}} {...rest}>
    {eyebrow?<Eyebrow tone={inverse?"inverse":"ink"}>{eyebrow}</Eyebrow>:null}
    <Tag style={{fontSize:sizes[size],color:inverse?"var(--text-inverse)":"var(--text-primary)",margin:0}}>{title}</Tag>
    {lede?<p style={{fontSize:"var(--text-body-lg)",fontWeight:"var(--weight-light)",lineHeight:"var(--leading-loose)",
      color:inverse?"rgba(255,255,255,.78)":"var(--text-secondary)",margin:0}}>{lede}</p>:null}
  </div>;
}
