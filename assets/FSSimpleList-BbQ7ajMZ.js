import{d as w,z as o,A as t,m as c,b as P,c as T,w as A,y as r,B as l,D as s,L as u,q as z,C as F,N as h,F as g,I as y,E as O,G as U}from"./vue.esm-bundler-CxS4_7kK.js";import{_ as d}from"./FSRow-D546kqFt.js";import{F as S}from"./FSCol-Co9r7Klj.js";import{F as b}from"./FSIcon-DKHuRfPI.js";import{_ as $}from"./FSSpan-3STIP-79.js";import{F as j}from"./FSImage-C9ySLapv.js";import{F as J}from"./FSLoader-BMQDJgx0.js";import{F as K}from"./FSTile-C18qmuVB.js";import{_ as I}from"./FSFadeOut-D40FnrcD.js";import{_ as v}from"./FSSlideGroup-Cseplt4t.js";import{F as M}from"./FSSearchField-jGkYIgq2.js";import{F as Q}from"./FSButtonEditIcon-B5iXLog4.js";import{F as _}from"./FSButton-D4qgd2ja.js";import{C as k}from"./useColors-CVdO3CcM.js";import{_ as q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as W}from"./FSButtonRemoveIcon-BAGMXLEV.js";import{f as X}from"./filter-C1K_d8Vd.js";const B=w({name:"FSButtonCopyIcon",components:{FSButton:_},setup(){return{ColorEnum:k}}});function Y(e,m,n,p,f,i){return o(),t(_,c({icon:"mdi-drag",variant:"icon"},e.$attrs),null,16)}const Z=q(B,[["render",Y]]);B.__docgenInfo={displayName:"FSButtonCopyIcon",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/buttons/FSButtonDragIcon.vue"]};const C=w({name:"FSSimpleList",components:{FSRow:d,FSCol:S,FSTile:K,FSIcon:b,FSSpan:$,FSImage:j,FSLoader:J,FSFadeOut:I,FSSlideGroup:v,FSSearchField:M,FSButtonEditIcon:Q,FSButtonDragIcon:Z,FSButtonRemoveIcon:W},props:{items:{type:Array,required:!0},tileProps:{type:Function,required:!1,default:()=>()=>({})},showEdit:{type:Boolean,required:!1,default:!0},showRemove:{type:Boolean,required:!1,default:!0},showDraggable:{type:Boolean,required:!1,default:!1},searchable:{type:Boolean,required:!1,default:!1},search:{type:String,required:!1,default:""},noFilter:{type:Boolean,required:!1,default:!1},maxHeight:{type:[Array,String,Number],required:!1,default:void 0},direction:{type:String,required:!1,default:"column"},itemLabel:{type:String,required:!1,default:"label"},loading:{type:Boolean,required:!1,default:!1}},emits:["click:edit","click:remove","update:search"],setup(e,{emit:m}){const n=P(e.search),p=T(()=>n.value?X(e.items,n.value):e.items),f=i=>{e.noFilter?m("update:search",i):n.value=i};return A(()=>e.search,i=>{n.value=i}),{actualSearch:n,filteredItems:p,ColorEnum:k,onSearch:f,FSSlideGroup:v,FSRow:d,FSCol:S}}});function x(e,m,n,p,f,i){const V=r("FSSearchField"),L=r("FSLoader"),R=r("FSButtonDragIcon"),D=r("FSImage"),E=r("FSButtonEditIcon"),N=r("FSButtonRemoveIcon"),H=r("FSTile");return o(),t(S,c(e.$props,{gap:"12px"}),{default:l(()=>[e.$props.searchable?(o(),t(V,{key:0,hideHeader:!0,modelValue:e.actualSearch,placeholder:"Search","onUpdate:modelValue":e.onSearch},null,8,["modelValue","onUpdate:modelValue"])):s("",!0),u(I,{maxHeight:e.$props.maxHeight,maskHeight:0},{default:l(()=>[(o(),t(z(e.$props.direction=="row"?e.FSRow:e.$props.direction=="wrap"?e.FSSlideGroup:e.FSCol),null,{default:l(()=>[e.$props.loading?(o(),F(g,{key:0},h(4,a=>u(L,{key:a,width:e.$props.direction=="row"||e.$props.direction=="wrap"?"220px":"100%",height:"50px"},null,8,["width"])),64)):(o(!0),F(g,{key:1},h(e.filteredItems,a=>(o(),t(H,c({key:a.id,ref_for:!0},e.tileProps(a),{width:e.$props.direction=="row"||e.$props.direction=="wrap"?"fit-content":"100%",height:"fit-content",editable:!1}),{default:l(()=>[y(e.$slots,"item",{item:a},()=>[u(d,{align:"center-left",height:"24px",wrap:!1},{default:l(()=>[e.showDraggable?(o(),t(R,{key:0})):s("",!0),y(e.$slots,"itemContent",{item:a},()=>[a.imageId?(o(),t(D,{key:0,imageId:a.imageId,width:"24px",height:"24px"},null,8,["imageId"])):a.icon?(o(),t(b,{key:1,size:"24px",icon:a.icon},null,8,["icon"])):s("",!0),u($,{font:"text-overline"},{default:l(()=>[O(U(a[e.$props.itemLabel||"label"]),1)]),_:2},1024)]),u(d,{align:"center-right",wrap:!1},{default:l(()=>[e.showEdit?(o(),t(E,{key:0,onClick:G=>e.$emit("click:edit",a.id)},null,8,["onClick"])):s("",!0),e.showRemove?(o(),t(N,{key:1,onClick:G=>e.$emit("click:remove",a.id)},null,8,["onClick"])):s("",!0)]),_:2},1024)]),_:2},1024)])]),_:2},1040,["width"]))),128))]),_:3}))]),_:3},8,["maxHeight"])]),_:3},16)}const he=q(C,[["render",x]]);C.__docgenInfo={displayName:"FSSimpleList",exportName:"default",description:"",tags:{},props:[{name:"items",type:{name:"{id: string, label?: string, icon?: string, imageId?: string, [index: string]: any}[]"},required:!0},{name:"tileProps",type:{name:"(item: any) => Record<string, any>"},required:!1,defaultValue:{func:!0,value:"() => () => ({})"}},{name:"showEdit",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"showRemove",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"showDraggable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"searchable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"search",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}},{name:"noFilter",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"maxHeight",type:{name:"string[] | number[] | string | number | null | undefined"},required:!1,defaultValue:{func:!1,value:"undefined"}},{name:"direction",values:["row","column","wrap"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"column"'}},{name:"itemLabel",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"label"'}},{name:"loading",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"click:edit"},{name:"click:remove"},{name:"update:search"}],slots:[{name:"item",scoped:!0,bindings:[{name:"item",title:"binding"}]},{name:"itemContent",scoped:!0,bindings:[{name:"item",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/lists/FSSimpleList.vue"]};export{he as F};
