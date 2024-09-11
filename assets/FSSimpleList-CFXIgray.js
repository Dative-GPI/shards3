import{d as _,z as t,A as n,m as S,b as A,c as z,w as O,y as r,B as l,E as h,G as y,D as s,L as u,k as G,C as b,N as v,F as k,I as w}from"./vue.esm-bundler-BSyvBTC9.js";import{_ as d}from"./FSRow-CVY2l52N.js";import{_ as g}from"./FSCol-YmDykHL-.js";import{F as J}from"./FSText-DyldgdXP.js";import{_ as $}from"./FSIcon-D23Cpf0F.js";import{_ as q}from"./FSSpan-CCGpb4KF.js";import{F as j}from"./FSImage-Bal15wTA.js";import{F as x}from"./FSLoader-CtbqJzfZ.js";import{F as K}from"./FSTile-ChlvKokJ.js";import{F as I}from"./FSFadeOut-D96pvLZm.js";import{F as M}from"./FSSearchField-BIrdfUzJ.js";import{F as Q}from"./FSButtonEditIcon-DTOp6UHb.js";import{F as B}from"./FSButton-BNq-0lOE.js";import{C}from"./useColors-DlnF7i6T.js";import{_ as V}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as W}from"./FSButtonRemoveIcon-BMT2eMXp.js";const L=_({name:"FSButtonCopyIcon",components:{FSButton:B},setup(){return{ColorEnum:C}}});function X(e,m,i,f,c,o){return t(),n(B,S({icon:"mdi-drag",variant:"icon"},e.$attrs),null,16)}const Y=V(L,[["render",X]]);L.__docgenInfo={displayName:"FSButtonCopyIcon",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/buttons/FSButtonDragIcon.vue"]};const R=_({name:"FSSimpleList",components:{FSRow:d,FSCol:g,FSText:J,FSTile:K,FSIcon:$,FSSpan:q,FSImage:j,FSLoader:x,FSFadeOut:I,FSSearchField:M,FSButtonEditIcon:Q,FSButtonDragIcon:Y,FSButtonRemoveIcon:W},props:{label:{type:String,required:!1},items:{type:Array,required:!0},tileProps:{type:Function,required:!1,default:()=>()=>({})},showEdit:{type:Boolean,required:!1,default:!0},showRemove:{type:Boolean,required:!1,default:!0},showDraggable:{type:Boolean,required:!1,default:!1},clickable:{type:Boolean,required:!1,default:!1},searchable:{type:Boolean,required:!1,default:!1},search:{type:String,required:!1,default:""},noFilter:{type:Boolean,required:!1,default:!1},maxHeight:{type:[Array,String,Number],required:!1,default:void 0},direction:{type:String,required:!1,default:"column"},itemLabel:{type:String,required:!1,default:"label"},loading:{type:Boolean,required:!1,default:!1}},emits:["click:edit","click:remove","click:item","update:search"],setup(e,{emit:m}){const i=A(e.search),f=z(()=>{if(!e.noFilter&&i.value){const o=i.value.toLowerCase();return e.items.filter(p=>{if(!JSON.stringify(p).toLowerCase().includes(o))return!1})}return e.items}),c=o=>{e.noFilter?m("update:search",o):i.value=o};return O(()=>e.search,o=>{i.value=o}),{actualSearch:i,filteredItems:f,ColorEnum:C,onSearch:c,FSRow:d,FSCol:g}}});function Z(e,m,i,f,c,o){const p=r("FSText"),D=r("FSSearchField"),N=r("FSLoader"),E=r("FSButtonDragIcon"),H=r("FSImage"),T=r("FSButtonEditIcon"),P=r("FSButtonRemoveIcon"),U=r("FSTile");return t(),n(g,S(e.$props,{gap:"12px"}),{default:l(()=>[e.$props.label?(t(),n(p,{key:0,font:"text-button"},{default:l(()=>[h(y(e.$props.label),1)]),_:1})):s("",!0),e.$props.searchable?(t(),n(D,{key:1,padding:"0 12px 0 0",hideHeader:!0,modelValue:e.actualSearch,placeholder:"Search","onUpdate:modelValue":e.onSearch},null,8,["modelValue","onUpdate:modelValue"])):s("",!0),u(I,{padding:"0 4px 0 0",maxHeight:e.$props.maxHeight,maskHeight:0},{default:l(()=>[(t(),n(G(e.$props.direction=="row"?e.FSRow:e.FSCol),null,{default:l(()=>[e.$props.loading?(t(),b(k,{key:0},v(4,a=>u(N,{key:a,width:e.$props.direction=="row"?"220px":"100%",height:"50px"},null,8,["width"])),64)):(t(!0),b(k,{key:1},v(e.filteredItems,a=>(t(),n(U,S({key:a.id,ref_for:!0},e.tileProps(a),{width:e.$props.direction=="row"?"fit-content":"100%",height:"fit-content",editable:!1,singleSelect:e.$props.clickable,"onUpdate:modelValue":F=>e.$emit("click:item",a.id)}),{default:l(()=>[w(e.$slots,"item",{item:a},()=>[u(d,{align:"center-left",wrap:!1},{default:l(()=>[e.showDraggable?(t(),n(E,{key:0})):s("",!0),w(e.$slots,"itemContent",{item:a},()=>[a.imageId?(t(),n(H,{key:0,imageId:a.imageId,width:"24px",height:"24px"},null,8,["imageId"])):a.icon?(t(),n($,{key:1,size:"24px",icon:a.icon},null,8,["icon"])):s("",!0),u(q,null,{default:l(()=>[h(y(a[e.itemLabel]),1)]),_:2},1024)]),u(d,{align:"center-right"},{default:l(()=>[e.showEdit?(t(),n(T,{key:0,onClick:F=>e.$emit("click:edit",a.id)},null,8,["onClick"])):s("",!0),e.showRemove?(t(),n(P,{key:1,onClick:F=>e.$emit("click:remove",a.id)},null,8,["onClick"])):s("",!0)]),_:2},1024)]),_:2},1024)])]),_:2},1040,["width","singleSelect","onUpdate:modelValue"]))),128))]),_:3}))]),_:3},8,["maxHeight"])]),_:3},16)}const ge=V(R,[["render",Z]]);R.__docgenInfo={displayName:"FSSimpleList",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!1},{name:"items",type:{name:"{id: string, label?: string, icon?: string, imageId?: string, [index: string]: any}[]"},required:!0},{name:"tileProps",type:{name:"(item: any) => Record<string, any>"},required:!1,defaultValue:{func:!0,value:"() => () => ({})"}},{name:"showEdit",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"showRemove",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"showDraggable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"clickable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"searchable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"search",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}},{name:"noFilter",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"maxHeight",type:{name:"string[] | number[] | string | number | null | undefined"},required:!1,defaultValue:{func:!1,value:"undefined"}},{name:"direction",values:["row","column"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"column"'}},{name:"itemLabel",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"label"'}},{name:"loading",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"click:item"},{name:"click:edit"},{name:"click:remove"},{name:"update:search"}],slots:[{name:"item",scoped:!0,bindings:[{name:"item",title:"binding"}]},{name:"itemContent",scoped:!0,bindings:[{name:"item",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/lists/FSSimpleList.vue"]};export{ge as F};
