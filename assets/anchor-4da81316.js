import{v as r}from"./theme-6b978bcd.js";const l=["top","bottom"],f=["start","end","left","right"];function g(t,e){let[i,n]=t.split(" ");return n||(n=r(l,i)?"start":r(f,i)?"top":"center"),{side:o(i,e),align:o(n,e)}}function o(t,e){return t==="start"?e?"right":"left":t==="end"?e?"left":"right":t}function a(t){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[t.side],align:t.align}}function u(t){return{side:t.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[t.align]}}function c(t){return{side:t.align,align:t.side}}function p(t){return r(l,t.side)?"y":"x"}export{u as a,c as b,a as f,p as g,g as p};
