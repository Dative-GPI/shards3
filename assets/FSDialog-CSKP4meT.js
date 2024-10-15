import{d as $,c as m,y as f,z as p,A as c,B as F,O as C,C as l,D as A,K as g,L as h,M as b,N as n,H as V,I as S,F as E,m as T}from"./vue.esm-bundler-DTB_q9xr.js";import{F as q}from"./FSButton-DblcRn12.js";import{F as z}from"./FSCard-GtkwWKOo.js";import{F as I}from"./FSText-D77NGEvR.js";import{_ as v}from"./FSRow-CFFgZ74C.js";import{C as y}from"./useColors-Du1QHlOW.js";import{u as w}from"./useBreakpoints-ERBVGIQe.js";import{s as P}from"./css-B7hQ34V-.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as R}from"./FSCol-CYWCfIBP.js";import{V as L}from"./VSpacer-y-n940VK.js";import{V as U}from"./VDialog-0V5lw7Cu.js";const N=$({name:"FSDialogContent",components:{FSButton:q,FSCard:z,FSText:I,FSRow:v},props:{title:{type:String,required:!1,default:null},subtitle:{type:String,required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:"fit-content"},cardClasses:{type:[Array,String],required:!1,default:null},modelValue:{type:Boolean,required:!1,default:!1},color:{type:String,required:!1,default:y.Dark}},emits:["update:modelValue"],setup(e){const{isExtraSmall:a}=w(),t=m(()=>{const o=[];return a.value?o.push("fs-dialog-mobile"):o.push("fs-dialog"),o}),d=m(()=>a.value?"100%":P(e.width));return{isExtraSmall:a,cardWidth:d,ColorEnum:y,classes:t}}});function W(e,a,t,d,o,_){const r=f("FSText"),s=f("FSCard");return p(),c(s,{padding:"24px",gap:"24px",class:A(e.$props.cardClasses),color:e.$props.color,width:e.cardWidth},F({header:l(()=>[n(R,null,{default:l(()=>[n(v,{align:"center-left",wrap:!1},{default:l(()=>[n(r,{font:"text-h2"},{default:l(()=>[V(S(e.$props.title),1)]),_:1}),n(L),n(q,{icon:"mdi-close",variant:"icon",color:e.ColorEnum.Dark,onClick:a[0]||(a[0]=u=>e.$emit("update:modelValue",!1))},null,8,["color"])]),_:1}),e.$props.subtitle?(p(),c(r,{key:0},{default:l(()=>[V(S(e.$props.subtitle),1)]),_:1})):E("",!0)]),_:1})]),_:2},[C(e.$slots,(u,i)=>({name:i,fn:l(B=>[g(e.$slots,i,h(b(B)))])}))]),1032,["class","color","width"])}const H=D(N,[["render",W]]);N.__docgenInfo={displayName:"FSDialogContent",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"subtitle",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"fit-content"'}},{name:"cardClasses",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Dark"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDialogContent.vue"]};const k=$({name:"FSDialog",components:{FSDialogContent:H},props:{title:{type:String,required:!1,default:null},subtitle:{type:String,required:!1,default:null},width:{type:[Array,String,Number],required:!1,default:"fit-content"},cardClasses:{type:[Array,String],required:!1,default:null},modelValue:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(){const{isExtraSmall:e}=w();return{classes:m(()=>{const t=[];return e.value?t.push("fs-dialog-mobile"):t.push("fs-dialog"),t})}}});function K(e,a,t,d,o,_){const r=f("FSDialogContent");return p(),c(U,T({transition:"dialog-bottom-transition",class:e.classes,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[1]||(a[1]=s=>e.$emit("update:modelValue",s))},e.$attrs),{default:l(()=>[g(e.$slots,"default",{},()=>[n(r,{title:e.$props.title,subtitle:e.$props.subtitle,width:e.$props.width,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[0]||(a[0]=s=>e.$emit("update:modelValue",s))},F({_:2},[C(e.$slots,(s,u)=>({name:u,fn:l(i=>[g(e.$slots,u,h(b(i)))])}))]),1032,["title","subtitle","width","modelValue"])])]),_:3},16,["class","modelValue"])}const le=D(k,[["render",K]]);k.__docgenInfo={displayName:"FSDialog",exportName:"default",description:"",tags:{},props:[{name:"title",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"subtitle",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"fit-content"'}},{name:"cardClasses",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],slots:[{name:"default"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDialog.vue"]};export{le as F};