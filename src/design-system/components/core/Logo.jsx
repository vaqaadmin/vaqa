import React from "react";

const SRC={dark:"vaqa_logo_black.png",light:"vaqa_logo_white.png",square:"vaqa_logo_yellow_square.png"};
export function Logo({variant="dark",height=28,assetBase="/images/vaqa",alt="VAQA",style,...rest}){
  return <img src={assetBase+"/"+SRC[variant]} alt={alt} style={{height,width:"auto",display:"block",...style}} {...rest}/>;
}
