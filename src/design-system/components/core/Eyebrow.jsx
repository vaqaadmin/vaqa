import React from "react";

export function Eyebrow({children,tone="ink",style,...rest}){
  const color=tone==="inverse"?"var(--text-inverse)":tone==="muted"?"var(--text-muted)":"var(--vaqa-ink)";
  return <span style={{display:"inline-block",fontSize:"var(--text-label)",fontWeight:"var(--weight-bold)",
    letterSpacing:"var(--tracking-label)",textTransform:"uppercase",color,...style}} {...rest}>{children}</span>;
}
