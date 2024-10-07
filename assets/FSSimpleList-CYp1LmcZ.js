import{d as F,z as t,A as l,m,y as s,E as b,O as k,G as q,N as u,C as o,K as I,F as p,H as A,I as P,b as T,c as G,w as O}from"./vue.esm-bundler-CWdIlc2r.js";import{_ as c}from"./FSRow-D9oM1Ufa.js";import{F as y}from"./FSCol-DyDZsJ9U.js";import{_ as $}from"./FSFadeOut-BkMq8VeO.js";import{_ as w}from"./FSSlideGroup-gtoPHKCV.js";import{F as z}from"./FSSearchField-DhTJXKam.js";import{F as V}from"./FSIcon-CF3g_zZI.js";import{_ as B}from"./FSSpan-WKxYfmnu.js";import{F as U}from"./FSImage-DYrQmZ2M.js";import{F as K}from"./FSLoader-BuPx1Vmx.js";import{F as j}from"./FSTile-T7YcP5W6.js";import{F as J}from"./FSButtonEditIcon-9KVn8_g5.js";import{F as C}from"./FSButton-BpyUfJIg.js";import{C as _}from"./useColors-CrLBSafx.js";import{_ as v}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as M}from"./FSButtonRemoveIcon-BOqytNtk.js";import{f as Q}from"./filter-C1K_d8Vd.js";const L=F({name:"FSButtonCopyIcon",components:{FSButton:C},setup(){return{ColorEnum:_}}});function X(e,a,i,g,S,d){return t(),l(C,m({icon:"mdi-drag",variant:"icon"},e.$attrs),null,16)}const Y=v(L,[["render",X]]);L.__docgenInfo={displayName:"FSButtonCopyIcon",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/buttons/FSButtonDragIcon.vue"]};const N=F({name:"FSSimpleListItem",components:{FSRow:c,FSTile:j,FSIcon:V,FSSpan:B,FSImage:U,FSLoader:K,FSButtonEditIcon:J,FSButtonDragIcon:Y,FSButtonRemoveIcon:M},props:{filteredItems:{type:Array,required:!0},tileProps:{type:Function,required:!1,default:()=>()=>({})},showEdit:{type:Boolean,required:!1,default:!0},showRemove:{type:Boolean,required:!1,default:!0},showDraggable:{type:Boolean,required:!1,default:!1},search:{type:String,required:!1,default:""},noFilter:{type:Boolean,required:!1,default:!1},itemLabel:{type:String,required:!1,default:"label"},loaderWidth:{type:[Array,String,Number],required:!1,default:void 0},tileWidth:{type:[Array,String,Number],required:!1,default:void 0},loading:{type:Boolean,required:!1,default:!1}},emits:["click:edit","click:remove"]});function Z(e,a,i,g,S,d){const h=s("FSLoader"),f=s("FSButtonDragIcon"),n=s("FSImage"),W=s("FSButtonEditIcon"),E=s("FSButtonRemoveIcon"),D=s("FSTile");return e.$props.loading?(t(),b(q,{key:0},k(4,r=>u(h,{key:r,width:e.loaderWidth,height:"50px"},null,8,["width"])),64)):(t(!0),b(q,{key:1},k(e.filteredItems,r=>(t(),l(D,m({key:r.id,ref_for:!0},e.tileProps(r),{width:e.tileWidth,height:"fit-content",editable:!1}),{default:o(()=>[I(e.$slots,"item",{item:r},()=>[u(c,{align:"center-left",height:"24px",wrap:!1},{default:o(()=>[e.showDraggable?(t(),l(f,{key:0})):p("",!0),I(e.$slots,"itemContent",{item:r},()=>[r.imageId?(t(),l(n,{key:0,imageId:r.imageId,width:"24px",height:"24px"},null,8,["imageId"])):r.icon?(t(),l(V,{key:1,size:"24px",icon:r.icon},null,8,["icon"])):p("",!0),u(B,{font:"text-overline"},{default:o(()=>[A(P(r[e.$props.itemLabel||"label"]),1)]),_:2},1024)]),u(c,{align:"center-right",wrap:!1},{default:o(()=>[e.showEdit?(t(),l(W,{key:0,onClick:H=>e.$emit("click:edit",r.id)},null,8,["onClick"])):p("",!0),e.showRemove?(t(),l(E,{key:1,onClick:H=>e.$emit("click:remove",r.id)},null,8,["onClick"])):p("",!0)]),_:2},1024)]),_:2},1024)])]),_:2},1040,["width"]))),128))}const x=v(N,[["render",Z]]);N.__docgenInfo={displayName:"FSSimpleListItem",exportName:"default",description:"",tags:{},props:[{name:"filteredItems",type:{name:"{id: string, label?: string, icon?: string, imageId?: string, [index: string]: any}[]"},required:!0},{name:"tileProps",type:{name:"(item: any) => Record<string, any>"},required:!1,defaultValue:{func:!0,value:"() => () => ({})"}},{name:"showEdit",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"showRemove",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"showDraggable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"search",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}},{name:"noFilter",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"itemLabel",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"label"'}},{name:"loaderWidth",type:{name:"string[] | number[] | string | number | null | undefined"},required:!1,defaultValue:{func:!1,value:"undefined"}},{name:"tileWidth",type:{name:"string[] | number[] | string | number | null | undefined"},required:!1,defaultValue:{func:!1,value:"undefined"}},{name:"loading",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"click:edit"},{name:"click:remove"}],slots:[{name:"item",scoped:!0,bindings:[{name:"item",title:"binding"}]},{name:"itemContent",scoped:!0,bindings:[{name:"item",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/lists/FSSimpleListItem.vue"]};const R=F({name:"FSSimpleList",components:{FSRow:c,FSCol:y,FSFadeOut:$,FSSlideGroup:w,FSSearchField:z,FSSimpleListItem:x},props:{items:{type:Array,required:!0},tileProps:{type:Function,required:!1,default:()=>()=>({})},showEdit:{type:Boolean,required:!1,default:!0},showRemove:{type:Boolean,required:!1,default:!0},showDraggable:{type:Boolean,required:!1,default:!1},searchable:{type:Boolean,required:!1,default:!1},search:{type:String,required:!1,default:""},noFilter:{type:Boolean,required:!1,default:!1},maxHeight:{type:[Array,String,Number],required:!1,default:void 0},direction:{type:String,required:!1,default:"column"},itemLabel:{type:String,required:!1,default:"label"},loading:{type:Boolean,required:!1,default:!1}},emits:["click:edit","click:remove","update:search"],setup(e,{emit:a}){const i=T(e.search),g=G(()=>i.value?Q(e.items,i.value):e.items),S=d=>{e.noFilter?a("update:search",d):i.value=d};return O(()=>e.search,d=>{i.value=d}),{actualSearch:i,filteredItems:g,ColorEnum:_,onSearch:S}}});function ee(e,a,i,g,S,d){const h=s("FSSearchField"),f=s("FSSimpleListItem");return t(),l(y,m(e.$props,{gap:"12px"}),{default:o(()=>[e.$props.searchable?(t(),l(h,{key:0,hideHeader:!0,modelValue:e.actualSearch,placeholder:"Search","onUpdate:modelValue":e.onSearch},null,8,["modelValue","onUpdate:modelValue"])):p("",!0),e.$props.direction=="column"?(t(),l($,{key:1,maxHeight:e.$props.maxHeight,maskHeight:0},{default:o(()=>[u(y,null,{default:o(()=>[u(f,m({loaderWidth:"100%",tileWidth:"100%",filteredItems:e.filteredItems,"onClick:edit":a[0]||(a[0]=n=>e.$emit("click:edit",n)),"onClick:remove":a[1]||(a[1]=n=>e.$emit("click:remove",n))},e.$props),null,16,["filteredItems"])]),_:1})]),_:1},8,["maxHeight"])):e.$props.direction=="row"?(t(),l(c,{key:2},{default:o(()=>[u(f,m({loaderWidth:"220px",tileWidth:"fit-content",filteredItems:e.filteredItems,"onClick:edit":a[2]||(a[2]=n=>e.$emit("click:edit",n)),"onClick:remove":a[3]||(a[3]=n=>e.$emit("click:remove",n))},e.$props),null,16,["filteredItems"])]),_:1})):(t(),l(w,{key:3},{default:o(()=>[u(f,m({loaderWidth:"220px",tileWidth:"fit-content",filteredItems:e.filteredItems,"onClick:edit":a[4]||(a[4]=n=>e.$emit("click:edit",n)),"onClick:remove":a[5]||(a[5]=n=>e.$emit("click:remove",n))},e.$props),null,16,["filteredItems"])]),_:1}))]),_:1},16)}const ye=v(R,[["render",ee]]);R.__docgenInfo={displayName:"FSSimpleList",exportName:"default",description:"",tags:{},props:[{name:"items",type:{name:"{id: string, label?: string, icon?: string, imageId?: string, [index: string]: any}[]"},required:!0},{name:"tileProps",type:{name:"(item: any) => Record<string, any>"},required:!1,defaultValue:{func:!0,value:"() => () => ({})"}},{name:"showEdit",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"showRemove",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"showDraggable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"searchable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"search",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}},{name:"noFilter",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"maxHeight",type:{name:"string[] | number[] | string | number | null | undefined"},required:!1,defaultValue:{func:!1,value:"undefined"}},{name:"direction",values:["row","column","slided"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"column"'}},{name:"itemLabel",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"label"'}},{name:"loading",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"click:edit"},{name:"click:remove"},{name:"update:search"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/lists/FSSimpleList.vue"]};export{ye as F};