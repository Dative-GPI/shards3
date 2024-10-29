import{d as m,c as p,y as f,z as c,A as g,C as n,m as C,N as V,B as S,O as y,K as F,L as $,M as h,D as v}from"./vue.esm-bundler-l-siv0w9.js";import{F as D}from"./FSCard-DL4SLpmS.js";import{C as t}from"./useColors-Bs2u1_6J.js";import{u as _}from"./useBreakpoints-C5IzU8MC.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as q}from"./VDialog-BXBtUIC2.js";const u=m({name:"FSDialogMenu",components:{FSCard:D},props:{cardClasses:{type:[Array,String],required:!1,default:null},modelValue:{type:Boolean,required:!1,default:!1},color:{type:String,required:!1,default:t.Dark}},emits:["update:modelValue"],setup(e){const{isExtraSmall:a}=_(),o=p(()=>{const s=["fs-dialog-menu"];return e.cardClasses&&(Array.isArray(e.cardClasses)?s.push(...e.cardClasses):s.push(e.cardClasses)),s});return{isExtraSmall:a,ColorEnum:t,classes:o}}});function B(e,a,o,s,M,N){const d=f("FSCard");return c(),g(q,C({modelValue:e.$props.modelValue,"onUpdate:modelValue":a[0]||(a[0]=r=>e.$emit("update:modelValue",r))},e.$attrs),{default:n(()=>[V(d,{width:"calc(100vw - 48px)",padding:"8px",gap:"24px",color:e.$props.color,class:v(e.classes)},S({_:2},[y(e.$slots,(r,l)=>({name:l,fn:n(i=>[F(e.$slots,l,$(h(i)))])}))]),1032,["color","class"])]),_:3},16,["modelValue"])}const x=k(u,[["render",B]]);u.__docgenInfo={displayName:"FSDialogMenu",exportName:"default",description:"",tags:{},props:[{name:"cardClasses",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Dark"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSDialogMenu.vue"]};export{x as F};
