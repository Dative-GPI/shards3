import{E as c,j as v,z as d}from"./vue.esm-bundler-0a1af505.js";import{u as m}from"./color-84472fbe.js";import{m as u,g as h,u as g}from"./useRender-76465e3d.js";import{p as f,x,y,e as i}from"./theme-8d83670f.js";const C=f({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...u(),...x()},"VDivider"),T=h()({name:"VDivider",props:C(),setup(e,o){let{attrs:t}=o;const{themeClasses:a}=y(e),{textColorClasses:s,textColorStyles:l}=m(c(e,"color")),n=v(()=>{const r={};return e.length&&(r[e.vertical?"maxHeight":"maxWidth"]=i(e.length)),e.thickness&&(r[e.vertical?"borderRightWidth":"borderTopWidth"]=i(e.thickness)),r});return g(()=>d("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},a.value,s.value,e.class],style:[n.value,l.value,e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}});export{T as V};
