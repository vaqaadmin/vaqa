import React from "react";

export function ValueCard({title,body,image,imageAlt="",style,...rest}){
  const [hover,setHover]=React.useState(false);
  return <article onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
    style={{display:"flex",flexDirection:"column",background:"var(--surface-card)",
    border:"var(--border-hairline) solid var(--border-subtle)",borderRadius:"var(--radius-lg)",overflow:"hidden",
    boxShadow:hover?"var(--shadow-lifted)":"var(--shadow-card)",transform:hover?"translateY(-4px)":"none",
    transition:"box-shadow var(--duration-base) var(--ease-out),transform var(--duration-base) var(--ease-out)",...style}} {...rest}>
    <div style={{aspectRatio:"16 / 10",background:"var(--neutral-100)",overflow:"hidden"}}>
      {image?<img src={image} alt={imageAlt} style={{width:"100%",height:"100%",objectFit:"cover"}}/>:null}
    </div>
    <div style={{padding:"var(--space-5)",display:"flex",flexDirection:"column",gap:"var(--space-3)"}}>
      <h3 style={{fontSize:"var(--text-h4)",margin:0}}>{title}</h3>
      <p style={{margin:0,fontSize:"var(--text-body-sm)",fontWeight:"var(--weight-light)",
        lineHeight:"var(--leading-loose)",color:"var(--text-secondary)"}}>{body}</p>
    </div>
  </article>;
}
