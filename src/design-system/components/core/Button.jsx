import React from "react";

const BASE={display:"inline-flex",alignItems:"center",justifyContent:"center",gap:"var(--space-2)",
fontFamily:"var(--font-core)",fontWeight:"var(--weight-bold)",textTransform:"uppercase",
letterSpacing:"var(--tracking-label)",fontSize:"var(--text-label)",borderRadius:"var(--radius-pill)",
border:"var(--border-hairline) solid transparent",cursor:"pointer",textDecoration:"none",
transition:"background var(--duration-base) var(--ease-standard),color var(--duration-base) var(--ease-standard),border-color var(--duration-base) var(--ease-standard)"};
const SIZES={sm:{padding:"10px 20px"},md:{padding:"14px 28px"},lg:{padding:"18px 36px",fontSize:"0.875rem"}};
const VARIANTS={
  primary:{background:"var(--action-primary-bg)",color:"var(--action-primary-fg)"},
  brand:{background:"var(--action-brand-bg)",color:"var(--action-brand-fg)"},
  outline:{background:"transparent",color:"var(--vaqa-ink)",borderColor:"var(--border-strong)"},
  ghost:{background:"transparent",color:"var(--vaqa-ink)",padding:"8px 0",borderRadius:0}
};
const HOVER={
  primary:{background:"var(--action-primary-bg-hover)",color:"var(--action-primary-fg-hover)"},
  brand:{background:"var(--action-brand-bg-hover)",color:"var(--action-brand-fg)"},
  outline:{background:"var(--vaqa-ink)",color:"var(--vaqa-white)"},
  ghost:{color:"var(--neutral-500)"}
};
export function Button({variant="primary",size="md",href,disabled=false,children,style,...rest}){
  const [hover,setHover]=React.useState(false);
  const Tag=href?"a":"button";
  const css={...BASE,...SIZES[size],...VARIANTS[variant],...(hover&&!disabled?HOVER[variant]:null),
    ...(disabled?{opacity:.4,pointerEvents:"none"}:null),...style};
  return <Tag href={href} disabled={Tag==="button"?disabled:undefined} style={css}
    onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} {...rest}>{children}</Tag>;
}
