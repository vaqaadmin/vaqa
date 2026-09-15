import React from "react";

export function Eyebrow({children,tone="ink",as:Tag="span",style,...rest}){
  const color=tone==="inverse"?"var(--text-inverse)":tone==="muted"?"var(--text-muted)":"var(--vaqa-ink)";
  return <Tag style={{display:"inline-block",fontSize:"var(--text-label)",fontWeight:"var(--weight-bold)",
    letterSpacing:"var(--tracking-label)",textTransform:"uppercase",color,margin:0,...style}} {...rest}>{children}</Tag>;
}
