import React from "react";

export function Accordion({items=[],defaultOpen=0,style,...rest}){
  const [open,setOpen]=React.useState(defaultOpen);
  return <div style={{borderTop:"var(--border-hairline) solid var(--border-subtle)",...style}} {...rest}>
    {items.map((it,i)=>{
      const isOpen=open===i;
      return <div key={i} style={{borderBottom:"var(--border-hairline) solid var(--border-subtle)"}}>
        <button onClick={()=>setOpen(isOpen?-1:i)} aria-expanded={isOpen}
          style={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",gap:"var(--space-4)",
          background:"none",border:0,padding:"var(--space-5) 0",cursor:"pointer",textAlign:"left",
          fontFamily:"var(--font-core)",fontSize:"var(--text-h4)",fontWeight:"var(--weight-bold)",color:"var(--text-primary)"}}>
          <span>{it.question}</span>
          <span aria-hidden="true" style={{flex:"0 0 auto",width:32,height:32,borderRadius:"var(--radius-circle)",
            background:isOpen?"var(--vaqa-ink)":"var(--vaqa-yellow)",color:isOpen?"var(--vaqa-white)":"var(--vaqa-ink)",
            display:"grid",placeItems:"center",fontSize:18,lineHeight:1,
            transition:"background var(--duration-fast) var(--ease-standard)"}}>{isOpen?"\u2212":"+"}</span>
        </button>
        {isOpen?<p style={{margin:"0 0 var(--space-5)",maxWidth:"60ch",fontWeight:"var(--weight-light)",
          lineHeight:"var(--leading-loose)",color:"var(--text-secondary)"}}>{it.answer}</p>:null}
      </div>;
    })}
  </div>;
}
