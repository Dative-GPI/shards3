import{d,z as n,A as t,m as c,y as a,B as r,J as D,K as E,k as L,C as V,N,I as u,L as l,D as i,E as P,G as T,F as z}from"./vue.esm-bundler-BSyvBTC9.js";import{_ as s}from"./FSRow-CVY2l52N.js";import{_ as m}from"./FSCol-YmDykHL-.js";import{F as A}from"./FSImage-Bal15wTA.js";import{_ as p}from"./FSIcon-D23Cpf0F.js";import{_ as f}from"./FSSpan-CCGpb4KF.js";import{F as G}from"./FSTile-ChlvKokJ.js";import{F as J}from"./FSButtonRemoveIcon-BMT2eMXp.js";import{F as K}from"./FSButtonEditIcon-DTOp6UHb.js";import{F as g}from"./FSButton-BNq-0lOE.js";import{C as F}from"./useColors-DlnF7i6T.js";import{_ as S}from"./_plugin-vue_export-helper-DlAUqK2U.js";const y=d({name:"FSButtonCopyIcon",components:{FSButton:g},setup(){return{ColorEnum:F}}});function j(e,h,v,I,k,w){return n(),t(g,c({icon:"mdi-drag",variant:"icon"},e.$attrs),null,16)}const H=S(y,[["render",j]]);y.__docgenInfo={displayName:"FSButtonCopyIcon",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/buttons/FSButtonDragIcon.vue"]};const _=d({name:"FSSimpleList",components:{FSRow:s,FSCol:m,FSTile:G,FSImage:A,FSIcon:p,FSSpan:f,FSButtonRemoveIcon:J,FSButtonEditIcon:K,FSButtonDragIcon:H},props:{items:{type:Array,required:!0},tileProps:{type:Function,required:!1,default:()=>()=>({})},showEdit:{type:Boolean,required:!1,default:!0},showRemove:{type:Boolean,required:!1,default:!0},showDraggable:{type:Boolean,required:!1,default:!1},direction:{type:String,required:!1,default:"column"},itemLabel:{type:String,required:!1,default:"label"}},emits:["click:edit","click:remove"],setup(){return{ColorEnum:F,FSRow:s,FSCol:m}}});function M(e,h,v,I,k,w){const B=a("FSButtonDragIcon"),C=a("FSImage"),$=a("FSButtonEditIcon"),b=a("FSButtonRemoveIcon"),q=a("FSTile");return n(),t(L(e.$props.direction=="row"?e.FSRow:e.FSCol),D(E(e.$attrs)),{default:r(()=>[(n(!0),V(z,null,N(e.items,o=>(n(),t(q,c({key:o.id,ref_for:!0},e.tileProps(o),{width:e.$props.direction=="row"?"fit-content":"100%",height:"fit-content"}),{default:r(()=>[u(e.$slots,"item",{item:o},()=>[l(s,{align:"center-left"},{default:r(()=>[e.showDraggable?(n(),t(B,{key:0})):i("",!0),u(e.$slots,"itemContent",{item:o},()=>[o.imageId?(n(),t(C,{key:0,imageId:o.imageId,width:"24px",height:"24px"},null,8,["imageId"])):o.icon?(n(),t(p,{key:1,size:"24px",icon:o.icon},null,8,["icon"])):i("",!0),l(f,null,{default:r(()=>[P(T(o[e.itemLabel]),1)]),_:2},1024)]),l(s,{align:"center-right"},{default:r(()=>[e.showEdit?(n(),t($,{key:0,onClick:R=>e.$emit("click:edit",o.id)},null,8,["onClick"])):i("",!0),e.showRemove?(n(),t(b,{key:1,onClick:R=>e.$emit("click:remove",o.id)},null,8,["onClick"])):i("",!0)]),_:2},1024)]),_:2},1024)])]),_:2},1040,["width"]))),128))]),_:3},16)}const ae=S(_,[["render",M]]);_.__docgenInfo={displayName:"FSSimpleList",exportName:"default",description:"",tags:{},props:[{name:"items",type:{name:"{id: string, label?: string, icon?: string, imageId?: string, [index: string]: any}[]"},required:!0},{name:"tileProps",type:{name:"(item: any) => Record<string, any>"},required:!1,defaultValue:{func:!0,value:"() => () => ({})"}},{name:"showEdit",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"showRemove",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"showDraggable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"direction",values:["row","column"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"column"'}},{name:"itemLabel",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"label"'}}],events:[{name:"click:edit"},{name:"click:remove"}],slots:[{name:"item",scoped:!0,bindings:[{name:"item",title:"binding"}]},{name:"itemContent",scoped:!0,bindings:[{name:"item",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/lists/FSSimpleList.vue"]};export{ae as F};