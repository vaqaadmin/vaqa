import React from "react";

export function PillTag({children,tone="outline",style,...rest}){
  const tones={
    outline:{background:"transparent",color:"var(--vaqa-ink)",borderColor:"var(--border-subtle)"},
    brand:{background:"var(--vaqa-yellow)",color:"var(--vaqa-ink)",borderColor:"transparent"},
    ink:{background:"var(--vaqa-ink)",color:"var(--vaqa-white)",borderColor:"transparent"}
  };
  return <span style={{display:"inline-flex",alignItems:"center",padding:"7px 16px",
    borderRadius:"var(--radius-pill)",border:"var(--border-hairline) solid",fontSize:"var(--text-body-sm)",
    fontWeight:"var(--weight-regular)",whiteSpace:"nowrap",...tones[tone],...style}} {...rest}>{children}</span>;
}
