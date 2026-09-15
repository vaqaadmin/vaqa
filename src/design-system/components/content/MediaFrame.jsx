import React from "react";

export function MediaFrame({src,alt="",ratio="4 / 3",radius="var(--radius-lg)",caption,style,...rest}){
  return <figure style={{margin:0,display:"flex",flexDirection:"column",gap:"var(--space-3)",...style}} {...rest}>
    <div style={{aspectRatio:ratio,overflow:"hidden",borderRadius:radius,background:"var(--neutral-100)"}}>
      {src?<img src={src} alt={alt} style={{width:"100%",height:"100%",objectFit:"cover"}}/>:null}
    </div>
    {caption?<figcaption style={{fontSize:"var(--text-caption)",color:"var(--text-muted)"}}>{caption}</figcaption>:null}
  </figure>;
}
