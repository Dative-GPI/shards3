import{b as u,d as y,c as k,g as x,U as q,w as H,z as w,E as O,K as S,P as M}from"./vue.esm-bundler-l-siv0w9.js";import{u as B}from"./uuid-DTaye2KM.js";import{u as V}from"./useBreakpoints-C5IzU8MC.js";import{u as F,C as T}from"./useColors-_VkINegi.js";import{s as l}from"./css-CP2C2-Fe.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";const $=()=>{const e=u(null),t=(n,o,...r)=>{s(),e.value=setTimeout(()=>n(...r),o)},s=()=>{e.value&&(clearTimeout(e.value),e.value=null)};return{debounce:t,cancel:s}},g=y({name:"FSFadeOut",props:{height:{type:[Array,String,Number],required:!1,default:void 0},maxHeight:{type:[Array,String,Number],required:!1,default:void 0},width:{type:[Array,String,Number],required:!1,default:"100%"},padding:{type:[Array,String,Number],required:!1,default:"0"},maskHeight:{type:[Array,String,Number],required:!1,default:"64px"},scrollOutside:{type:Boolean,required:!1,default:!0},hideHorizontalOverflow:{type:Boolean,required:!1,default:!0},disableTopMask:{type:Boolean,required:!1,default:!1},disableBottomMask:{type:Boolean,required:!1,default:!1}},emits:["scroll"],setup(e){const{windowHeight:t,windowWidth:s}=V(),{debounce:n}=$(),{getColors:o}=F(),r=o(T.Background),a=u(null),i=u("0px"),d=u("0px"),h=u(0),f=u(null),c=`id${B()}`,v=k(()=>({"--fs-fade-out-height":e.height?l(e.height):"initial","--fs-fade-out-max-height":e.maxHeight?l(e.maxHeight):"initial","--fs-fade-out-width":l(e.width),"--fs-fade-out-padding":l(e.padding),"--fs-fade-out-width-offset":e.scrollOutside?"12px":"0px","--fs-fade-out-padding-offset":e.scrollOutside?"4px":"0px","--fs-fade-out-margin-right":e.scrollOutside?"-12px":"0px","--fs-fade-out-mask-color":r.base,"--fs-fade-out-top-mask-height":e.disableTopMask?"0px":d.value,"--fs-fade-out-bottom-mask-height":e.disableBottomMask?"0px":i.value,"--fs-fade-out-x-overflow":e.hideHorizontalOverflow?"hidden":"auto"})),p=()=>{if(a.value){if(a.value.clientHeight>=a.value.scrollHeight){i.value="0px",d.value="0px";return}a.value.scrollHeight-a.value.scrollTop-a.value.clientHeight<1.5?i.value="0px":i.value=l(e.maskHeight),a.value.scrollTop<.5?d.value="0px":d.value=l(e.maskHeight),h.value=a.value.scrollTop}},m=()=>n(p,280);return x(()=>{m(),f.value=new ResizeObserver(b=>{b.forEach(()=>{m()})}),document.querySelector(`#${c}`)&&f.value.observe(document.querySelector(`#${c}`))}),q(()=>{f.value&&f.value.disconnect()}),H([()=>s.value,()=>t.value],m),{fadeOutRef:a,elementId:c,style:v,debounceMasks:m}}}),z=["id"];function N(e,t,s,n,o,r){return w(),O("div",{class:"fs-fade-out",ref:"fadeOutRef",id:e.elementId,style:M(e.style),onScroll:t[0]||(t[0]=a=>{e.$emit("scroll",a),e.debounceMasks()})},[S(e.$slots,"default")],44,z)}const D=_(g,[["render",N]]);g.__docgenInfo={displayName:"FSFadeOut",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"string[] | number[] | string | number | null | undefined"},required:!1,defaultValue:{func:!1,value:"undefined"}},{name:"maxHeight",type:{name:"string[] | number[] | string | number | null | undefined"},required:!1,defaultValue:{func:!1,value:"undefined"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"100%"'}},{name:"padding",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"0"'}},{name:"maskHeight",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:'"64px"'}},{name:"scrollOutside",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"hideHorizontalOverflow",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"disableTopMask",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"disableBottomMask",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"scroll"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSFadeOut.vue"]};export{D as _,$ as u};
